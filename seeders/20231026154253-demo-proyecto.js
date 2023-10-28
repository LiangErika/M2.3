'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Proyectos',[
      {
        proyectoId: 'pro-1',
        nombre: 'superProyecto',
        descripcion: null,
        donatarioId: 4,
        cantidadDonada: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        proyectoId: 'pro-2',
        nombre: 'miniProyecto',
        descripcion: null,
        donatarioId: 5,
        cantidadDonada: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Proyectos',null,{});
  }
};
