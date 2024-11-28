'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reviews', [
        {
          comment: 'Motorista simpático, mas errou o caminho 3 vezes. O carro cheira a donuts.',
          rating: 2,
          id_driver: 1,
        },
        {
          comment: 'Que viagem incrível! O carro é um show à parte e o motorista, apesar de' +
                   ' ter uma cara de poucos amigos, foi super gente boa. Recomendo!',
          rating: 4,
          id_driver: 2,
        },
        {
          comment: 'Serviço impecável! O motorista é a própria definição de classe e o carro' + 
                   'é simplesmente magnífico. Uma experiência digna de um agente secreto',
          rating: 5,
          id_driver: 3,   
        },
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reviews', null, {});
  }
};
