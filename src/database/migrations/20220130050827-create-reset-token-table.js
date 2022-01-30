'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('reset_tokens', {
      reset_token_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false,
        unique: true
      },
      reset_token: {
        type: Sequelize.STRING(512),
        allowNull: false,
      },
      reset_token_status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      reset_token_expiration: {
        type: Sequelize.DATE,
        allowNull: false
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'user_id'
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
    queryInterface.dropTable('reset_tokens');
  }
};
