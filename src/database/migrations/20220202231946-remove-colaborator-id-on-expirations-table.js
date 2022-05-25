'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("expirations", "colaborator_id")
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn("expirations", "colaborator_id", {
      colaborator_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'colaborators',
          key: 'colaborator_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    })
  }
};
