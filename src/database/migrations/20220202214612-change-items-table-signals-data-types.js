'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn("items", "item_red_sign", {
        type: Sequelize.INTEGER,
        allowNull: false
      }),
    ],
      [
        queryInterface.changeColumn("items", "item_yellow_sign", {
          type: Sequelize.INTEGER,
          allowNull: false
        }),
      ],
      [
        queryInterface.changeColumn("items", "item_green_sign", {
          type: Sequelize.INTEGER,
          allowNull: true
        }),
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn("items", "item_red_sign", {
        type: Sequelize.BOOLEAN,
        allowNull: true
      }),
    ],
      [
        queryInterface.changeColumn("items", "item_yellow_sign", {
          type: Sequelize.BOOLEAN,
          allowNull: true
        }),
      ],
      [
        queryInterface.changeColumn("items", "item_green_sign", {
          type: Sequelize.BOOLEAN,
          allowNull: true
        }),
      ]
    )
  }
};
