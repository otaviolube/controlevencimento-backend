const { Model, DataTypes } = require('sequelize');

class CompanyModel extends Model {
    static init(sequelize){
        super.init({
            company_id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                unique: true
            },
            company_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            company_status: {
                type: DataTypes.STRING,
                allowNull: false
            },
        }, {
            sequelize, 
            tableName: 'companies'
        });
    }

    static associate(models){
        this.belongsToMany(models.ColaboratorModel, { foreignKey: 'company_id', through: models.CompaniesColaboratorsModel, as: 'colaborators'});
        this.hasMany(models.ClientModel, { foreignKey: 'company_id', as: 'clients'});
    }

}

module.exports = CompanyModel;