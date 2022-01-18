const { Model, DataTypes } = require('sequelize');

class ColaboratorModel extends Model {
    static init(sequelize){
        super.init({
            colaborator_id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                unique: true
            },
            colaborator_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            colaborator_phone: {
                type: DataTypes.STRING,
                allowNull: true
            },
            colaborator_email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            colaborator_type: {
                type: DataTypes.STRING,
                allowNull: false
            },
            colaborator_photo: {
                type: DataTypes.STRING,
                allowNull: true
            },
            colaborator_status: {
                type: DataTypes.STRING,
                allowNull: false
            },
        }, {
            sequelize, 
            tableName: 'colaborators'
        });
    }

    static associate(models){
        this.belongsToMany(models.AreaModel, { foreignKey: 'colaborator_id', through: 'areas_colaborators', as: 'areas'});
        this.belongsToMany(models.CompanyModel, { foreignKey: 'colaborator_id', through: 'companies_colaborators', as: 'companies'});
    }
}

module.exports = ColaboratorModel;