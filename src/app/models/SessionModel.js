const { Model, DataTypes } = require('sequelize');

class SessionModel extends Model {
    static init(sequelize){
        super.init({
            session_id: {
                type: DataTypes.UUID,
                primaryKey: true,
                unique: true,
                allowNull: false
            },
            session_token: {
                type: DataTypes.STRING(512),
                unique: true,
                allowNull: false
            },
            session_status: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'sessions'
        });
    }

    static associate(models){
        this.belongsTo(models.UserModel, { foreignKey: 'user_id', as: 'session_user_id'});
    }
}

module.exports = SessionModel;