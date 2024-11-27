'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('drivers', [
      {
        name: 'Homer Simpson',
        description: 'Olá! Sou o Homer, seu motorista camarada! Relaxe e aproveite o' +
                      ' passeio, com direito a rosquinhas e boas risadas (e talvez alguns' +
                      ' desvios).',
        vehicle:' Plymouth Valiant 1973 rosa e enferrujado',
        rate: 2.50,
        KmMinimo: 1,
      },
      {
        name: 'Dominic Toretto',
        description: 'Ei, aqui é o Dom. Pode entrar, vou te levar com segurança e ' +
                     'rapidez ao seu destino. Só não mexa no rádio, a playlist é ' +
                     'sagrada.',
        vehicle:'Dodge Charger R/T 1970 modificado',
        rate: 5.00,
        KmMinimo: 5,
      },
      {
        name: 'James Bond',
        description: 'Boa noite, sou James Bond. À seu dispor para um passeio' +
                     ' suave e discreto. Aperte o cinto e aproveite a viagem.',
        vehicle:'Aston Martin DB5 clássico',
        rate: 10.00,
        KmMinimo: 10,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('drivers', null, {});
    
  }
};