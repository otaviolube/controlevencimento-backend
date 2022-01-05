const { Model, DataTypes } = require('sequelize');

class LogModel extends Model {
    static init(sequelize){
        super.init({
            log_id: DataTypes.UUID,
            log_event: DataTypes.STRING
        }, {
            sequelize
        });
    }

    static associations(models){
        this.belongsTo(models.user, { foreignKey: 'user_id', as: 'user_id'});
    }
}

module.exports = LogModel;