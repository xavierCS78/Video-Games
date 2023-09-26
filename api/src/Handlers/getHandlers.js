

const getName = (req,res)=>{
    const {Nombre} = req.query;
    
    try {
        res.status(200).send(`Aca Busca X EL Nombre: ${Nombre}`);
    } catch (error) {
     res.status(400).send(`El Nombre: ${Nombre} No Existe en la DB`);   
    }
};

const getById = (req,res)=>{
const {Id} = req.params;
try {
    res.status(200).send(`ACa Busca por el ID: ${Id}`);
} catch (error) {
    res.status(400).send(`No se encontro el ID: ${Id}`)
}
};

const getGenre = (req,res)=>{
    try {
        res.status(200).send('Aca encuentras X GENERO');
    } catch (error) {
        
    }
};

const getVideoGame = (req,res)=>{
    try {
        res.status(200).send('Aca encuentras el ARRAY')
    } catch (error) {
        
    }
};







module.exports = {
    getName,
    getById,
    getGenre,
    getVideoGame
};