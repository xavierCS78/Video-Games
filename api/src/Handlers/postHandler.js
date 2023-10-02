const {postController} = require ('../Controllers/postController')

 const postHandler = async(req, res)=> { 
    const { 
        background_image, 
        name, 
        slug, 
        platforms, 
        released, 
        rating, 
        genre } = req.body;

    try {
        const response = await postController (
            background_image, 
            name, 
            slug, 
            platforms, 
            released, 
            rating, 
            genre);
               
        res.status(201).json(response);
        
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = postHandler;