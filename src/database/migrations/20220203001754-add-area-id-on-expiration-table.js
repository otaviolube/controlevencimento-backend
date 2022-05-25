'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn("expirations", "area_id", {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'areas',
          key: 'area_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("expirations", "area_id")
  }
};
