const { Model, DataTypes } = require('sequelize');

class ContractModel extends Model {
    static init(sequelize){
        super.init({
            contract_id: {
                type: DataTypes.UUID,
                primaryKey: true,
                unique: true,
                allowNull: false
            },
            contract_number: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false
            },
            contract_status: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'contracts'
        });
    }

    static associate(models){
        this.belongsTo(models.ColaboratorModel, { foreignKey: 'colaborator_id', as: 'manager_id'});
        this.belongsTo(models.ColaboratorModel, { foreignKey: 'colaborator_id', as: 'agent_id'});
        this.belongsTo(models.ClientModel, { foreignKey: 'client_id', as: 'client_contact_id'});
    }
}

module.exports = ContractModel;