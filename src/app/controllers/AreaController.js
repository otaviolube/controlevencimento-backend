const AreaModel = require('../models/AreaModel');
const { v4: uuidv4 } = require('uuid');

class AreaController {
    
    constructor(){

    }

    async getAllAreas(req, res){
        try{
            const areas = await AreaModel.findAll();
            return res.status(200).json({
                msg: "Áreas coletadas com sucesso!",
                areas: areas
            });
        }catch(error){
            console.log(error);
            return res.status(400).json({
                error: error.message
            });
        }
    } 

    async getArea(req, res){

        const area_id = req.params.id;

        try{
            const area = await AreaModel.findOne({
                where: {
                    area_id: area_id
                }
            });
            if (!area) {
                return res.status(400).json({
                    msg: "ID da área não encontrado"
                });
            }
            return res.status(200).json({
                msg: "Área encontrada com sucesso.",
                area: area
            });
        }catch(error){
            console.log(error);
            return res.status(400).json({
                error: error.message
            });
        }
    }

    async createArea(req, res){
        const {
            area_name,
            area_email,
            area_status } = req.body;
        try{
            const areasNumber = await AreaModel.count({
                where: {
                    area_name
                }
            });

            if (areasNumber > 0) {
                return res.status(401).json({
                    msg: `Área já existente na base de dados!`
                });
            }

            const area_id = uuidv4();

            const area = await AreaModel.create({
                area_id,
                area_name,
                area_email,
                area_status
            });

            return res.status(200).json({
                msg: 'Área inserida com sucesso!',
                area: area
            });
        }catch(error){
            console.log(error);
            return res.status(400).json({
                error: error.message
            });
        }
    }

    async updateArea(req, res){

        const area_id = req.params.id;

        try{
            const area = await AreaModel.findOne({
                where: {
                    area_id: area_id
                }
            });

            if (!area) {
                return res.status(400).json({
                    msg: "ID da área não encontrado."
                });
            }

            const area_new_data = req.body;

            await AreaModel.update({
                area_id: area_new_data.area_id,
                area_name: area_new_data.area_name,
                area_email: area_new_data.area_email,
                area_status: area_new_data.area_status
            }, {
                where: {
                    area_id: area_id
                }
            });
            return res.status(200).json({
                msg: 'Área atualizada com sucesso!',
                area: area_new_data
            });
        }catch(error){
            console.log(error);
            return res.status(400).json({
                error: error.message
            });
        }

    }

    async deleteArea(req, res){

        const area_id = req.params.id;

        try{
            const area = await AreaModel.findOne({
                where: {
                    area_id: area_id
                }
            });

            if (!area) {
                return res.status(400).json({
                    msg: "ID da área não encontrado."
                });
            }

            await AreaModel.destroy({
                where: {
                    area_id: area_id
                }
            });

            return res.status(200).json({
                msg: 'Área deletada com sucesso!'
            });
            
        }catch(error){
            console.log(error);
            return res.status(400).json({
                error: error.message
            });
        }

    }

}

module.exports = new AreaController();