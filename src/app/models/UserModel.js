const { Model, DataTypes } = require('sequelize');

class UserModel extends Model {
    static init(sequelize){
        super.init({
            user_id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                unique: true
            },
            user_name: DataTypes.STRING,
            user_password: DataTypes.STRING,
            user_email: {
                type: DataTypes.STRING,
                unique: true
            },
            user_login: {
                type: DataTypes.STRING,
                unique: true
            },
            user_image: DataTypes.STRING,
            user_type: DataTypes.STRING,
            user_status: DataTypes.STRING
        }, {
            sequelize, 
            tableName: 'users'
        });
    }
}

module.exports = UserModel;