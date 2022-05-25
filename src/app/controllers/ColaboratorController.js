const ColaboratorModel = require('../models/ColaboratorModel');
const AreaModel = require('../models/AreaModel');
const CompanyModel = require('../models/CompanyModel');

const { v4: uuidv4 } = require('uuid');

class ColaboratorController {

    constructor() {

    }

    async createColaborator(req, res) {
        const {
            colaborator_name,
            colaborator_phone,
            colaborator_email,
            colaborator_type,
            colaborator_photo,
            colaborator_status,
            area_id,
            company_id,
        } = req.body;

        if (!colaborator_name || !colaborator_email || !colaborator_type || !colaborator_status) {
            return res.status(400).json({
                msg: `Parâmetros insuficientes!`
            });
        }

        try {
            const colaboratorsNumber = await ColaboratorModel.count({
                where: { colaborator_email }
            });

            if (colaboratorsNumber > 0) {
                return res.status(400).json({
                    msg: `Colaborador já existente na base de dados!`
                });
            }

            const area = await AreaModel.findByPk(area_id);

            if (!area) {
                return res.status(400).json({
                    msg: `Área não encontrada na base de dados`
                });
            }

            const company = await CompanyModel.findByPk(company_id);

            if (!company) {
                return res.status(400).json({
                    msg: `Empresa não encontrada na base de dados`
                });
            }

            const colaborator_id = uuidv4();

            const colaborator = await ColaboratorModel.create({
                colaborator_id,
                colaborator_name,
                colaborator_phone,
                colaborator_email,
                colaborator_type,
                colaborator_photo,
                colaborator_status
            });

            const areas_colaborators_id = uuidv4();

            await area.addColaborator(colaborator, {
                through: {
                    areas_colaborators_id: areas_colaborators_id
                }
            });

            const companies_colaborators_id = uuidv4();

            await company.addColaborator(colaborator, {
                through: {
                    companies_colaborators_id: companies_colaborators_id
                }
            });

            return res.status(200).json({
                msg: 'Colaborador cadastrado com sucesso!',
                company: company
            });

        } catch (error) {
            console.log(error);
            return res.status(400).json({
                error: error.message
            });
        }

    }

    async getAllColaborators(req, res) {
        try {
            const colaborators = await ColaboratorModel.findAll({
                include: [{association: "areas"}, {association: "companies"}]
            });
            return res.status(200).json({
                msg: "Colaboradores coletados com sucesso!",
                colaborators: colaborators
            });
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                error: error.message
            });
        }
    }

    async getColaborator(req, res) {

        const colaborator_id = req.params.id;

        if (!colaborator_id) {
            return res.status(400).json({
                msg: `Parâmetro do colaborador não encontrado`
            });
        }

        try { 
            const colaborator = await ColaboratorModel.findOne({
                include: [{association: "areas"}, {association: "companies"}],
                where: {
                    colaborator_id: colaborator_id
                }
            });

            if (!colaborator) {
                return res.status(400).json({
                    msg: "ID do colaborador não encontrado"
                });
            }

            return res.status(200).json({
                msg: "Colaborador encontrado com sucesso.",
                colaborator: colaborator
            });

        } catch (error) {
            console.log(error);
            return res.status(400).json({
                error: error.message
            });
        }

    }


    async updateColaborator(req, res) {
        const colaborator_id = req.params.id;

        if (!colaborator_id) {
            return res.status(400).json({
                msg: `Parâmetro do colaborador não encontrado`
            });
        }

        const colaborator_new_data = req.body;

        try { 
            const colaborator = await ColaboratorModel.findOne({
                include: [{association: "areas"}, {association: "companies"}],
                where: {
                    colaborator_id: colaborator_id
                }
            });

            if (!colaborator) {
                return res.status(400).json({
                    msg: "ID do colaborador não encontrado"
                });
            }

            //O problema de eu deletar um colaborador para inseri-lo novamente são os seus relacionamentos. Se eu o fizer perderei todos os relacionamentos daquele colaborador ... então eu preciso somente atualizar

            //Considerando que o colaborador existe, preciso verificar a área e a empresa para a atualização. Se alguma delas não existir, deve ocorrer um erro

            const area = await AreaModel.findByPk(colaborator_new_data.area_id);

            if (!area) {
                return res.status(400).json({
                    msg: `Área do colaborator não encontrada na base de dados`
                });
            }

            const company = await CompanyModel.findByPk(colaborator_new_data.company_id);

            if (!company) {
                return res.status(400).json({
                    msg: `Empresa do colaborador não encontrada na base de dados`
                });
            }

            await ColaboratorModel.update({
                colaborator_id: colaborator_id,
                colaborator_name: colaborator_new_data.colaborator_name,
                colaborator_phone: colaborator_new_data.colaborator_phone,
                colaborator_email: colaborator_new_data.colaborator_email,
                colaborator_type: colaborator_new_data.colaborator_type,
                colaborator_photo: colaborator_new_data.colaborator_photo,
                colaborator_status: colaborator_new_data.colaborator_status
            },{
                where: {
                    colaborator_id: colaborator_id
                }
            });

            return res.status(200).json({
                msg: "Colaborador atualizado com sucesso.",
                colaborator: colaborator_new_data
            });

        } catch (error) {
            console.log(error);
            return res.status(400).json({
                error: error.message
            });
        }
    }

    async deleteColaborator(req, res) {

        const colaborator_id = req.params.id;

        if (!colaborator_id) {
            return res.status(400).json({
                msg: `Parâmetro do colaborador não encontrado`
            });
        }

        try { 
            const colaborator = await ColaboratorModel.findOne({
                where: {
                    colaborator_id: colaborator_id
                }
            });

            if (!colaborator) {
                return res.status(400).json({
                    msg: "ID do colaborador não encontrado"
                });
            }
            await ColaboratorModel.destroy({
                where: {
                    colaborator_id: colaborator_id
                }
            });

            return res.status(200).json({
                msg: "Colaborador deletado com sucesso."
            });

        } catch (error) {
            console.log(error);
            return res.status(400).json({
                error: error.message
            });
        }

    }

}

module.exports = new ColaboratorController();