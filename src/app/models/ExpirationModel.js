const { Model, DataTypes } = require('sequelize');

class ExpirationModel extends Model {
    static init(sequelize){
        super.init({
            expiration_id: {
                type: DataTypes.UUID,
                primaryKey: true,
                unique: true,
                allowNull: false
            },
            expiration_accomplished: {
                type: DataTypes.DATE,
                allowNull: false
            },
            expiration_valid: {
                type: DataTypes.DATE,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'contracts'
        });
    }

    static associate(models){
        this.belongsTo(models.SubitemModel, { foreignKey: 'subitem_id', as: 'subitem_expiration_id'});
        this.belongsTo(models.ColaboratorModel, { foreignKey: 'colaborator_id', as: 'colaborator_expiration_id'});
        this.belongsTo(models.ContractModel, { foreignKey: 'contract_id', as: 'contract_expiration_id'});
    }
}

module.exports = ExpirationModel;