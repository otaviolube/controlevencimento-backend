'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('subitems', {
      subitem_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false,
        unique: true
      },
      subitem_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      subitem_description: {
        type: Sequelize.STRING(2048),
        allowNull: true,
      },
      subitem_status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      item_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'items',
          key: 'item_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    queryInterface.dropTable('subitems');
  }
};