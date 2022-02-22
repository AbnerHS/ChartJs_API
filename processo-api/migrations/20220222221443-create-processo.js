'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Processos', {
      persistenceId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CASEID: {
        type: Sequelize.INTEGER
      },
      DATAABERTURA: {
        type: Sequelize.STRING
      },
      SOLICITANTEDEPARTAMENTO: {
        type: Sequelize.STRING
      },
      STATUSPROCESSO: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Processos');
  }
};