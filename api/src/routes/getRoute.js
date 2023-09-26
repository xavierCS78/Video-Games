const {
    getName, 
    getById, 
    getGenre, 
    getVideoGame} = require('../Handlers/getHandlers');

const { Router } = require('express');

const getRoute = Router();

getRoute.get('/name', getName);
getRoute.get('/genre',getGenre)
getRoute.get('/:id', getById);
getRoute.get('/', getVideoGame);


module.exports = {
    getRoute
};
