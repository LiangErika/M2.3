'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Proyectos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      proyectoId: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nombre: {
        type: Sequelize.STRING
      },
      descripcion:{
        type: Sequelize.STRING
      },
      donatarioId: {
        allowNull:false,
        type: Sequelize.INTEGER,
      },
      cantidadDonada:{
        allowNull:false,
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Proyectos');
  }
};