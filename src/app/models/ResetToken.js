const { Model, DataTypes } = require('sequelize');

class ResetTokenModel extends Model {
    static init(sequelize){
        super.init({
            reset_token_id: {
                type: DataTypes.UUID,
                primaryKey: true,
                unique: true,
                allowNull: false
            },
            reset_token: {
                type: DataTypes.STRING(512),
                allowNull: false
            },
            reset_token_status: {
                type: DataTypes.STRING,
                allowNull: false
            },
            reset_token_expiration: {
                type: DataTypes.DATE,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'reset_tokens'
        });
    }

    static associate(models){
        this.belongsTo(models.UserModel, { foreignKey: 'user_id', as: 'reset_token_user_id'});
    }
}

module.exports = ResetTokenModel;