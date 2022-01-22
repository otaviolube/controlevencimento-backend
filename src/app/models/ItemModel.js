const { Model, DataTypes } = require('sequelize');

class ItemModel extends Model {
    static init(sequelize){
        super.init({
            item_id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                unique: true
            },
            item_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            item_description: {
                type: DataTypes.STRING(2048),
                allowNull: true
            },
            item_red_sign: {
                type: DataTypes.BOOLEAN,
                allowNull: true
            },
            item_yellow_sign: {
                type: DataTypes.BOOLEAN,
                allowNull: true
            },
            item_green_sign: {
                type: DataTypes.BOOLEAN,
                allowNull: true
            },
            user_status: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            sequelize, 
            tableName: 'items'
        });
    }
}

module.exports = ItemModel;