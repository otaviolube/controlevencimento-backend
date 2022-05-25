const { Model, DataTypes } = require('sequelize');

class AreaModel extends Model {
    static init(sequelize){
        super.init({
            area_id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                unique: true
            },
            area_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            area_email: {
                type: DataTypes.STRING,
                allowNull: true
            },
            area_status: {
                type: DataTypes.STRING,
                allowNull: true
            }
        }, {
            sequelize, 
            tableName: 'areas'
        });
    }

    static associate(models){
        this.belongsToMany(models.ColaboratorModel, { foreignKey: 'area_id', through: models.AreasColaboratorsModel, as: 'colaborators'});
    }
}

module.exports = AreaModel;