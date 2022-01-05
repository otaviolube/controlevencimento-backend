const { Model, DataTypes } = require('sequelize');

class UserModel extends Model {
    static init(sequelize){
        super.init({
            user_id: {
                type: DataTypes.UUID,
                primaryKey: true
            },
            user_name: DataTypes.STRING,
            user_password: DataTypes.STRING,
            user_email: DataTypes.STRING,
            user_login: DataTypes.STRING,
            user_imagem: DataTypes.STRING,
            user_type: DataTypes.STRING,
            user_status: DataTypes.STRING
        }, {
            sequelize, 
            tableName: 'users'
        });
    }
}

module.exports = UserModel;