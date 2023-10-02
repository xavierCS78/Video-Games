const { Videogame, Genre } = require('../db');

const postController = async (
    background_image,
    name,
    slug,
    platfoms,
    released,
    rating,
    genre) => {
    const newGame = await Videogame.findOrCreate({
        where: {
            background_image,
            name,
            slug,
            platfoms,
            released,
            rating,
        }
    })
    genre.forEach( async (g) => {
        let genreDB = await Genre.findAll({
            where:{name: g}})
            console.log('genreDB: ',genreDB); 
            
            await newGame.addGenre(genreDB)
        });
        
    return newGame
};

module.exports = {postController};
