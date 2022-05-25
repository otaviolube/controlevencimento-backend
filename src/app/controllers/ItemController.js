const ItemModel = require('../models/ItemModel');
const { v4: uuidv4 } = require('uuid');
class ItemController {

    constructor() {

    }

    async createItem(req, res) {
        const {
            item_name,
            item_description,
            item_red_sign,
            item_yellow_sign,
            item_green_sign,
            item_status
        } = req.body;

        if(!item_name || !item_red_sign || !item_yellow_sign || !item_status){
            return res.status(400).json({
                msg: `Parâmetros insuficientes!`
            });
        }

        try {
            const itemsNumber = await ItemModel.count({
                where: { item_name }
            });

            if (itemsNumber > 0) {
                return res.status(401).json({
                    msg: `Item já existente na base de dados!`
                });
            }

            const item_id = uuidv4();

            const item = await ItemModel.create({
                item_id,
                item_name,
                item_description,
                item_red_sign,
                item_yellow_sign,
                item_green_sign,
                item_status
            });

            return res.status(200).json({
                msg: 'Item inserido com sucesso!',
                subitem: item
            });

        } catch (error) {
            console.log(error);
            return res.status(400).json({
                error: error.message
            });
        }
    }

    async showItems(req, res) {
        try {
            const items = await ItemModel.findAll();
            return res.status(200).json({
                msg: "Itens coletados com sucesso!",
                items: items
            });
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                error: error.message
            });
        }
    }

    async showItem(req, res) {
        const item_id = req.params.id;

        if(!item_id){
            return res.status(400).json({
                msg: `Parâmetro do item não encontrado`
            });
        }

        try {

            const item = await ItemModel.findOne({
                where: {
                    item_id: item_id
                }
            });

            if (!item) {
                return res.status(400).json({
                    msg: "ID do item não encontrado"
                });
            }

            return res.status(200).json({
                msg: "Item encontrado com sucesso.",
                item: item
            });

        } catch (error) {
            console.log(error);
            return res.status(400).json({
                error: error.message
            });
        }
    }

    async updateItem(req, res) {
        const item_id = req.params.id;

        if (!item_id) {
            return res.status(400).json({
                msg: `Parâmetro do item não encontrado`
            });
        }

        try {
            const item = await ItemModel.findOne({
                where: {
                    item_id: item_id
                }
            });

            if (!item) {
                return res.status(400).json({
                    msg: "ID do item não encontrado."
                });
            }

            const item_new_data = req.body;

            await ItemModel.update({
                item_name: item_new_data.item_name,
                item_description: item_new_data.item_description,
                item_red_sign: item_new_data.item_red_sign,
                item_yellow_sign: item_new_data.item_yellow_sign,
                item_green_sign: item_new_data.item_green_sign,
                item_status: item_new_data.status
            }, {
                where: {
                    item_id: item_id
                }
            });

            return res.status(200).json({
                msg: 'Item atualizado com sucesso!',
                item: item_new_data
            });

        } catch (error) {
            console.log(error);
            return res.status(400).json({
                error: error.message
            });
        }
    }


    async deleteItem(req, res) {

        const item_id = req.params.id;

        if(!item_id){
            return res.status(400).json({
                msg: `Parâmetro do item não encontrado`
            });
        }

        try{
            const item = await ItemModel.findOne({
                where: {
                    item_id: item_id
                }
            });

            if (!item) {
                return res.status(400).json({
                    msg: "ID do item não encontrado."
                });
            }

            await ItemModel.destroy({
                where: {
                    item_id: item_id
                }
            });

            return res.status(200).json({
                msg: 'Item deletado com sucesso!'
            });
            
        }catch(error){
            console.log(error);
            return res.status(400).json({
                error: error.message
            });
        }

    }

}

module.exports = new ItemController();