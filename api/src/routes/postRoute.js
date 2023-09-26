const postHandler = require ('../Handlers/postHandler')
const { Router } = require('express');

const postRoute = Router();

postRoute.post('/', postHandler);


module.exports = {
    postRoute
};
