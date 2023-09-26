
const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    Id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },

    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validation: {
        min: 4,
        max: 10
      },
    },
    Descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Plataformas: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: []
    },

    Imagen: {
      type: DataTypes.STRING,
      allowNull: false
    },

    Lanzamiento: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    Rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

  },
    { timestamps: false });
};
