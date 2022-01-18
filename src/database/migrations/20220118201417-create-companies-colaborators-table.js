'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('companies_colaborators', {
      companies_colaborators_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false,
        unique: true
      },
      company_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'companies', key: 'company_id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      colaborator_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'colaborators', key: 'colaborator_id' },
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
    queryInterface.dropTable('companies_colaborators');
  }
};