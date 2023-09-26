//const postController = require ('../Controllers/postController')


 const postHandler = async(req, res)=>{
//     const {Nombre,
//         Descripcion,
//         Plataformas,
//         Imagen,
//         Lanzamiento,
//         Rating
//     } = req.body;

    try {
        res.status(200).send('PARA CREAR UN GAME')
        // if (!Nombre||!Descripcion||!Plataformas||!Imagen||!Lanzamiento||!Rating){
        //     res.status(400).json({error: error.message});
        // } else{
        //     const response = await postController({Nombre,
        //         Descripcion,
        //         Plataformas,
        //         Imagen,
        //         Lanzamiento,
        //         Rating});
        //         res.status(201).json(response);
        // };
    } catch (error) {
        // res.status(400).json({error: error.message});
    };
};

module.exports = postHandler;