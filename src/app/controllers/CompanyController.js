const CompanyModel = require('../models/CompanyModel');
const { v4: uuidv4 } = require('uuid');

class CompanyController {
    
    constructor(){

    }

    async createCompany(req, res){
        const {
            company_name,
            company_status
        } = req.body;

        if(!company_name || !company_status){
            return res.status(400).json({
                msg: `Parâmetros insuficientes!`
            });
        }

        try{
            const companiesNumber = await CompanyModel.count({
                where: { company_name }
            });

            if (companiesNumber > 0) {
                return res.status(401).json({
                    msg: `Empresa já existente na base de dados!`
                });
            }

            const company_id = uuidv4();

            const company = await CompanyModel.create({
                company_id,
                company_name,
                company_status
            });

            return res.status(200).json({
                msg: 'Empresa cadastrada com sucesso!',
                company: company
            });

        }catch(error){
            console.log(error);
            return res.status(400).json({
                error: error.message
            });
        }
    }

    async getAllCompanies(req, res){
        try {
            const companies = await CompanyModel.findAll();
            return res.status(200).json({
                msg: "Empresas coletadas com sucesso!",
                companies: companies
            });
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                error: error.message
            });
        }
    }

    async getCompany(req, res){

        const company_id = req.params.id;

        if(!company_id){
            return res.status(400).json({
                msg: `Parâmetro da empresa não encontrado`
            });
        }

        try{

            const company = await CompanyModel.findOne({
                where: {
                    company_id: company_id
                }
            });

            if (!company) {
                return res.status(400).json({
                    msg: "ID da empresa não encontrado"
                });
            }

            return res.status(200).json({
                msg: "Empresa encontrada com sucesso.",
                company: company
            });

        }catch(error){
            console.log(error);
            return res.status(400).json({
                error: error.message
            });
        }
    }


    async updateCompany(req, res){

        const company_id = req.params.id;

        if(!company_id){
            return res.status(400).json({
                msg: `Parâmetro da empresa não encontrado`
            });
        }

        try{

            const company = await CompanyModel.findOne({
                where: {
                    company_id: company_id
                }
            });

            if (!company) {
                return res.status(400).json({
                    msg: "ID da empresa não encontrado"
                });
            }

            const company_new_data = req.body;

            await CompanyModel.update({
                company_name: company_new_data.company_name,
                company_status: company_new_data.company_status
            }, {
                where: {
                    company_id : company_id
                }
            })

            return res.status(200).json({
                msg: "Empresa atualizada com sucesso.",
                company: company_new_data
            });

        }catch(error){
            console.log(error);
            return res.status(400).json({
                error: error.message
            });
        }

    }

    async deleteCompany(req, res){

        const company_id = req.params.id;

        if(!company_id){
            return res.status(400).json({
                msg: `Parâmetro da empresa não encontrado`
            });
        }

        try{

            const company = await CompanyModel.findOne({
                where: {
                    company_id: company_id
                }
            });


            console.log(company)

            if (!company) {
                return res.status(400).json({
                    msg: "ID da empresa não encontrado"
                });
            }

            await CompanyModel.destroy({
                where: {
                    company_id : company_id
                }
            });

            return res.status(200).json({
                msg: "Empresa deletada com sucesso."
            });

        }catch(error){
            console.log(error);
            return res.status(400).json({
                error: error.message
            });
        }

    }

}

module.exports = new CompanyController();