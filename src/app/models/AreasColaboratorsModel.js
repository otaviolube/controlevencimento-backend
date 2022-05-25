const { Model, DataTypes } = require('sequelize');

class AreasColaboratorsModel extends Model {
    static init(sequelize){
        super.init({
            areas_colaborators_id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                unique: true
            }
        }, {
            sequelize, 
            tableName: 'areas_colaborators'
        });
    }
}

module.exports = AreasColaboratorsModel;