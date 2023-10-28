'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Persona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Persona.belongsToMany(models.Proyecto,{
        through: models.DonadorProyecto,
        as: "Donadores",
        foreignKey: 'donadorId'
      });
      
      models.Persona.hasMany(models.Proyecto,{
        foreignKey: 'donatarioId',
        as: 'proyectos'
      })
    }
  }
  Persona.init({
    rfc: DataTypes.STRING,
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Persona',
    tableName: 'Personas',
    name: {
      singular: 'persona',
      tableName: 'personas'
    }
  });
  return Persona;
};