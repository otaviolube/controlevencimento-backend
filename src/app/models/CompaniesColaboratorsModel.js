const { Model, DataTypes } = require('sequelize');

class CompaniesColaboratorsModel extends Model {
    static init(sequelize){
        super.init({
            companies_colaborators_id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                unique: true
            }
        }, {
            sequelize, 
            tableName: 'companies_colaborators'
        });
    }
}

module.exports = CompaniesColaboratorsModel;