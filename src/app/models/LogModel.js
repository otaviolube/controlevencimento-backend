const { Model, DataTypes } = require('sequelize');

class LogModel extends Model {
    static init(sequelize){
        super.init({
            log_id: DataTypes.UUID,
            log_event: DataTypes.STRING
        }, {
            sequelize,
            tableName: 'logs'
        });
    }

    static associate(models){
        this.belongsTo(models.UserModel, { foreignKey: 'user_id', as: 'log_user_id'});
    }
}

module.exports = LogModel;