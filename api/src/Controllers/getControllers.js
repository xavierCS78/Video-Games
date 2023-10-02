require('dotenv').config();
const { URL, KEY } = process.env;
const { Videogame, Genre } = require('../db');
const axios = require('axios');

const filPlatforms = (arr) => {//filtra la propiedad platforms
    let p = [];
    for (let x = 0; x < arr.length; x++) {
        if (arr[x])
            p.push(arr[x].platform.name);
    }
    return p;
};


const cleanArray = (arr) => // esta funcion limpia el array que llega de la API
    arr.map((x) => {
        return {
            id: x.id,
            background_image: x.background_image,
            name: x.name,
            slug: x.slug,
            platforms: filPlatforms(x.platforms),  //funcion que filtra la inf para que el el ARRAY salgan solo los nombres
            released: x.released,
            rating: x.rating,
            genre: x.genres.map(g=> g.name),  // filtra el ARRAy con solo los nombres
            created: false
        }
    });

const getGameApi = async () => { // hace la solicitud a la API
    const { data } = await axios.get(`${URL}=${KEY}`);
    const getsApi = data.results;
    const getApi = cleanArray(getsApi) // se limpia la inf de la API
    return getApi;
};

const getGameDB = async () => { // hace la solicitud a la DB
    const gameDB = await Videogame.findAll();
    return gameDB;
};

const getGame = async () => { // hace la solicitud full
    const getDB = await getGameDB();
    const getApi = await getGameApi();
    const allGames = [...getDB, ...getApi];

    if (!getDB.length && !getApi.length) {
        return 'No hay informacion  de VodeoGames';
    }
    return allGames;
};

const getId = async (id) => { // Hace la solicitud por el ID 
    const response = await getGame();
    const getId = response.find((game) => game.id == id);
    return getId;
};


const nameGame = async(name) => {  // hace la Solicitud por el Nombre 
    const response = await getGame();
    const getName = response.filter( game => game.name.toLowerCase().includes(name.toLowerCase()));
    return getName.slice(0,15);
};


const genreGet = async ()=>{ // Hace la Solcitud por el Genero
const response = await getGame();
const gen = response.map(g => g.genre);
const genreflat = gen.flat();
const genSet = new Set(genreflat);//Setea las de la DB y la API
const genArr = [...genSet];
console.log ("genArr: ",genArr);

genArr.forEach( async (g) => 
await Genre.findOrCreate({where:{name:g}}));
return genArr
};

module.exports = {
    getGame,
    getId,
    nameGame,
    genreGet
};