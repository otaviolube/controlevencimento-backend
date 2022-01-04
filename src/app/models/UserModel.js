const { Model, DataTypes } = require('sequelize');

class UserModel extends Model {
    static int(sequelize){
        super.init({
            nome: DataTypes.STRING
            //Outros atributos
        }, {
            sequelize, 
            tableName: 'Users'
        });
    }
}

module.exports = UserModel;