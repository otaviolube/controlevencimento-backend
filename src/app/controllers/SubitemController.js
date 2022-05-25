const SubitemModel = require('../models/SubitemModel');
const { v4: uuidv4 } = require('uuid');
class SubitemController {

    constructor() {

    }

    async createSubitem(req, res) {
        const {
            subitem_name,
            subitem_description,
            subitem_red_sign,
            subitem_yellow_sign,
            subitem_green_sign,
            subitem_status,
            item_id
        } = req.body;

        if (!subitem_name || !subitem_status || !item_id) {
            return res.status(400).json({
                msg: `Parâmetros insuficientes!`
            });
        }

        try {
            const subItemsNumber = await SubitemModel.count({
                where: { subitem_name }
            });

            if (subItemsNumber > 0) {
                return res.status(401).json({
                    msg: `Subitem já existente na base de dados!`
                });
            }

            const subitem_id = uuidv4();

            const subitem = await SubitemModel.create({
                subitem_id,
                subitem_name,
                subitem_description,
                subitem_red_sign,
                subitem_yellow_sign,
                subitem_green_sign,
                subitem_status,
                item_id
            });

            return res.status(200).json({
                msg: 'Subitem inserido com sucesso!',
                subitem: subitem
            });
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                error: error.message
            });
        }
    }

    async getSubitems(req, res) {
        try {
            const subitems = await SubitemModel.findAll({
                include: {association: "item"}
            });
            return res.status(200).json({
                msg: "Subitens coletados com sucesso!",
                subitems: subitems
            });
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                error: error.message
            });
        }
    }

    async getSubitem(req, res) {
        const subitem_id = req.params.id;

        if (!subitem_id) {
            return res.status(400).json({
                msg: `Parâmetro do subitem não encontrado`
            });
        }

        try { 
            const subitem = await SubitemModel.findOne({
                include: {association: "item"},
                where: {
                    subitem_id: subitem_id
                }
            });

            if (!subitem) {
                return res.status(400).json({
                    msg: "ID do subitem não encontrado"
                });
            }

            return res.status(200).json({
                msg: "Subitem encontrado com sucesso.",
                subitem: subitem
            });

        } catch (error) {
            console.log(error);
            return res.status(400).json({
                error: error.message
            });
        }
    }


    async updateSubitem(req, res) {
        const subitem_id = req.params.id;

        if (!subitem_id) {
            return res.status(400).json({
                msg: `Parâmetro do subitem não encontrado`
            });
        }

        try {

            const subitem = await SubitemModel.findOne({
                where: {
                    subitem_id: subitem_id
                }
            });

            if (!subitem) {
                return res.status(400).json({
                    msg: "ID do subitem não encontrado."
                });
            }

            const subitem_new_data = req.body;

            await SubitemModel.update({
                subitem_name: subitem_new_data.subitem_name,
                subitem_description: subitem_new_data.subitem_description,
                subitem_red_sign: subitem_new_data.subitem_red_sign,
                subitem_yellow_sign: subitem_new_data.subitem_yellow_sign,
                subitem_green_sign: subitem_new_data.subitem_green_sign,
                subitem_status: subitem_new_data.subitem_status,
                item_id: subitem_new_data.item_id
            }, {
                where: {
                    subitem_id: subitem_id
                }
            });

            return res.status(200).json({
                msg: 'Subitem atualizado com sucesso!',
                subitem: subitem_new_data
            });

        } catch (error) {
            console.log(error);
            return res.status(400).json({
                error: error.message
            });
        }
    }

    async deleteSubitem(req, res) {
        const subitem_id = req.params.id;

        if (!subitem_id) {
            return res.status(400).json({
                msg: `Parâmetro do subitem não encontrado`
            });
        }

        try{
            const subitem = await SubitemModel.findOne({
                where: {
                    subitem_id: subitem_id
                }
            });

            if (!subitem) {
                return res.status(400).json({
                    msg: "ID do subitem não encontrado."
                });
            }

            await SubitemModel.destroy({
                where: {
                    subitem_id: subitem_id
                }
            });

            return res.status(200).json({
                msg: 'Subitem deletado com sucesso!'
            });

        }catch(error){
            console.log(error);
            return res.status(400).json({
                error: error.message
            });
        }
    }

}

module.exports = new SubitemController();