'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('items', {
      item_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false,
        unique: true
      },
      item_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      item_description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      item_red_sign: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      item_yellow_sign: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      item_green_sign: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      item_status: {
        type: Sequelize.STRING,
        allowNull: true,
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
    queryInterface.dropTable('items');
  }
};