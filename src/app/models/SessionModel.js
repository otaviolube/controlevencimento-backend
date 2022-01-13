const { Model, DataTypes } = require('sequelize');

class SessionModel extends Model {
    static init(sequelize){
        super.init({
            session_id: {
                type: DataTypes.UUID,
                unique: true,
                allowNull: false
            },
            session_token: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false
            },
            session_status: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            sequelize
        });
    }

    static associate(models){
        this.belongsTo(models.UserModel, { foreignKey: 'user_id', as: 'session_user_id'});
    }
}

module.exports = SessionModel;