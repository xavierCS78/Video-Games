const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('genre', {
    Id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
        
    name: {
        type: DataTypes.STRING,
  allowNull: false,
  validation:{
    min: 4,
    max:15
  },
        
    },
  },
  {timesTamps: false});
};
