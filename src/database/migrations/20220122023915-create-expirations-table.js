'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('expirations', {
      expiration_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false,
        unique: true
      },
      expiration_accomplished: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      expiration_valid: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      subitem_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'subitems',
          key: 'subitem_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      colaborator_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'colaborators',
          key: 'colaborator_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      contract_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'contracts',
          key: 'contract_id'
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
    queryInterface.dropTable('expirations');
  }
};