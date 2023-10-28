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
    await queryInterface.bulkInsert('Personas',[
      {
        rfc: 'LOMS010610B95',
        nombre: 'Lopez Mateu Salah',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rfc: 'MEBA991108DQ2',
        nombre: 'Menendez Brito Aroa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rfc: 'RIDF800814D38',
        nombre: 'Riera Domenech Flora',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rfc: 'COMG701119PU8',
        nombre: 'Contreras Montiel Gonzalo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rfc: 'CEPI8812268V0',
        nombre: 'Cerda Palomo Izaskun',
        createdAt: new Date(),
        updatedAt: new Date()
      }
   ]);

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Personas',null,{});
  }
};
