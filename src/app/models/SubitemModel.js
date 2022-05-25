const { Model, DataTypes } = require('sequelize');

class SubitemModel extends Model {
    static init(sequelize){
        super.init({
            subitem_id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                unique: true
            },
            subitem_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            subitem_description: {
                type: DataTypes.STRING(2048),
                allowNull: true
            },
            subitem_red_sign: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            subitem_yellow_sign: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            subitem_green_sign: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            subitem_status: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            sequelize, 
            tableName: 'subitems'
        });
    }

    static associate(models){
        this.belongsTo(models.ItemModel, { foreignKey: 'item_id', as: 'item'});
    }
}

module.exports = SubitemModel;