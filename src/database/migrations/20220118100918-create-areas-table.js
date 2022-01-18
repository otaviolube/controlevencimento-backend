'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('areas', {
      area_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false,
        unique: true
      },
      area_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      area_email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      area_status: {
        type: Sequelize.STRING,
        primaryKey: false,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('areas');
  }
};