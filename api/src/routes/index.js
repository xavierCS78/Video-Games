const { Router } = require('express');
const {getRoute} = require ('./getRoute');
const { postRoute } = require('./postRoute');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const routes = Router();

routes.use('/videogame',getRoute);
routes.use('/post',postRoute);


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = routes;
