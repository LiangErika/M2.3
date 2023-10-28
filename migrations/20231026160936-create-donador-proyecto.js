'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DonadorProyectos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      donadorId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Personas',
          key:'id'
        }
      },
      proyectoId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Proyectos',
          key: 'id'
        }
      },
      cantidadDonada: {
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
    await queryInterface.dropTable('DonadorProyectos');
  }
};