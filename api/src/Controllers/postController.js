const axios = require ('axios');
const Videogame = require('../models/Videogame');


const postController = async(
    Nombre,
    Descripcion,
    Plataformas,
    Imagen,
    Lanzamiento,
    Rating)=>{
        const newGame = await Videogame.findOrCreate({
            where:{
                Nombre,
                Descripcion,
                Plataformas,
                Imagen,
                Lanzamiento,
                Rating
            }
        });
    return newGame;
};

module.exports = postController;
