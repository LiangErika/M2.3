'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Proyecto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Proyecto.belongsToMany(models.Persona,{
        through: models.DonadorProyecto,
        as: "Donadores",
        //foreignKey: 'proyectoId'
      });
      
      models.Proyecto.belongsTo(models.Persona,{
        foreignKey: 'donatarioId',
        as:'donatario'
      })
    }
  }
  Proyecto.init({
    proyectoId: DataTypes.STRING,
    nombre: DataTypes.STRING,
    descripcion:DataTypes.STRING,
    donatarioId: DataTypes.INTEGER,
    cantidadDonada:{
      type: DataTypes.FLOAT,
      allowNull:false,
      defaultValue:0
    }
  }, {
    sequelize,
    modelName: 'Proyecto',
    tablename: 'Proyectos',
    name: {
      singular: 'proyecto',
      plural: 'proyectos'
    }
  });
  return Proyecto;
};