const { Model, DataTypes } = require('sequelize');

class ClientModel extends Model {
    static init(sequelize){
        super.init({
            client_id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                unique: true
            },
            client_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            client_status: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            sequelize, 
            tableName: 'clients'
        });
    }

    static associate(models){
        this.belongsTo(models.CompanyModel, { foreignKey: 'company_id', as: 'company'});
    }
}

module.exports = ClientModel;