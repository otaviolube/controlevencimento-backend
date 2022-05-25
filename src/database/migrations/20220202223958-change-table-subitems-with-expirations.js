'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("subitems", "subitem_red_sign", {
        type: Sequelize.INTEGER,
        allowNull: true
      }),
    ],
      [
        queryInterface.addColumn("subitems", "subitem_yellow_sign", {
          type: Sequelize.INTEGER,
          allowNull: true
        }),
      ],
      [
        queryInterface.addColumn("subitems", "subitem_green_sign", {
          type: Sequelize.INTEGER,
          allowNull: true
        }),
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("subitems", "subitem_red_sign")
    ],
      [
        queryInterface.removeColumn("subitems", "subitem_yellow_sign")
      ],
      [
        queryInterface.removeColumn("subitems", "subitem_green_sign")
      ]
    )
  }
};
