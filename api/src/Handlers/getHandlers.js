const { getGame, getId, nameGame, genreGet } = require('../Controllers/getControllers');

const getVideoGame = async (req,res) => {
    const {name} = req.query;
    try {
        if (name){
            const response = await nameGame(name);
            res.status(200).json(response);
        
        }else{
            const response = await getGame();
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const getById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await getId(id);
        if(!response)
        res.status(400).json({error: error.message});
        res.status(200).json(response);
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};




const getGenre = async (req, res) => {
    try {
        const response = await genreGet();
        res.status(200).json(response);
    } catch (error) {
res.status(400).json({error: error.message});
    }
};




module.exports = {
    getById,
    getGenre,
    getVideoGame
};