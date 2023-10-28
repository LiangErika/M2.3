'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DonadorProyecto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DonadorProyecto.belongsTo(models.Persona, { foreignKey: 'donadorId', as: 'donadores' });
      DonadorProyecto.belongsTo(models.Proyecto, { foreignKey: 'proyectoId', as: 'proyecto' });
    }
  }
  DonadorProyecto.init({
    donadorId: DataTypes.INTEGER,
    proyectoId: DataTypes.INTEGER,
    cantidadDonada: {
      type:DataTypes.FLOAT,
      defaultValue:0
    }
  }, {
    sequelize,
    modelName: 'DonadorProyecto',
    tableName: 'DonadorProyectos'
  });
  return DonadorProyecto;
};