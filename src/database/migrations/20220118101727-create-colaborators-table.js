'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('colaborators', {
      colaborator_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false,
        unique: true
      },
      colaborator_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      colaborator_phone: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      colaborator_email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      colaborator_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      colaborator_photo: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      colaborator_status: {
        type: Sequelize.STRING,
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
    queryInterface.dropTable('colaborators');
  }
};