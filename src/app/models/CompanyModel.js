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
        this.belongsToMany(models.ColaboratorModel, { foreignKey: 'company_id', through: 'companies_colaborators', as: 'colaborators'});
    }
}

module.exports = CompanyModel;