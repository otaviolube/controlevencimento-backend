const ClientModel = require('../models/ClientModel');
const { Op } = require('sequelize');

const { v4: uuidv4 } = require('uuid');

class ClientController {

    constructor() {

    }

    async createClient(req, res) {
        const {
            client_name,
            client_status,
            company_id
        } = req.body;

        if (!client_name || !client_status || !company_id) {
            return res.status(400).json({
                msg: `Parâmetros insuficientes!`
            });
        }

        try {

            const clientsNumber = await ClientModel.count({
                where: {
                    [Op.and]: [
                        { client_name: client_name },
                        { company_id: company_id }
                    ]
                }
            });

            if (clientsNumber > 0) {
                return res.status(401).json({
                    msg: `Cliente já existente na base de dados!`
                });
            }

            const client_id = uuidv4();

            const client = await ClientModel.create({
                client_id,
                client_name,
                client_status,
                company_id
            });

            return res.status(200).json({
                msg: 'Cliente inserido com sucesso!',
                client: client
            });

        } catch (error) {
            console.log(error);
            return res.status(400).json({
                error: error.message
            });
        }
    }

    async getClients(req, res) {
        try {
            const clients = await ClientModel.findAll({
                include: { association: "company" }
            });
            return res.status(200).json({
                msg: "Clientes coletados com sucesso!",
                clients: clients
            });
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                error: error.message
            });
        }
    }

    async getClient(req, res) {
        const client_id = req.params.id;

        if (!client_id) {
            return res.status(400).json({
                msg: `Parâmetro do cliente não encontrado`
            });
        }

        try {
            const client = await ClientModel.findOne({
                include: { association: "company" },
                where: {
                    client_id: client_id
                }
            });

            if (!client) {
                return res.status(400).json({
                    msg: "ID do cliente não encontrado"
                });
            }

            return res.status(200).json({
                msg: "Cliente encontrado com sucesso.",
                client: client
            });

        } catch (error) {
            console.log(error);
            return res.status(400).json({
                error: error.message
            });
        }
    }


    async updateClient(req, res) {
        const client_id = req.params.id;

        if (!client_id) {
            return res.status(400).json({
                msg: `Parâmetro do cliente não encontrado`
            });
        }

        const client_new_data = req.body;

        try {
            const client = await ClientModel.findOne({
                where: {
                    client_id: client_id
                }
            });

            if (!client) {
                return res.status(400).json({
                    msg: "ID do cliente não encontrado"
                });
            }

            const clientsNumber = await ClientModel.count({
                where: {
                    [Op.and]: [
                        { client_name: client_new_data.client_name },
                        { company_id: client_new_data.company_id }
                    ]
                }
            });

            if (clientsNumber > 0) {
                return res.status(401).json({
                    msg: `Dados do cliente já existem na base de dados`
                });
            }

            await ClientModel.update({
                client_name: client_new_data.client_name,
                client_status: client_new_data.client_status,
                company_id: client_new_data.company_id
            }, {
                where: {
                    client_id: client_id  
                }
            })

            return res.status(200).json({
                msg: "Cliente atualizado com sucesso.",
                client: client_new_data
            });

        } catch (error) {
            console.log(error);
            return res.status(400).json({
                error: error.message
            });
        }

    }

    async deleteClient(req, res) {
        const client_id = req.params.id;

        if (!client_id) {
            return res.status(400).json({
                msg: `Parâmetro do cliente não encontrado`
            });
        }

        try{
            const client = await ClientModel.findOne({
                where: {
                    client_id: client_id
                }
            });

            if (!client) {
                return res.status(400).json({
                    msg: "ID do cliente não encontrado"
                });
            }

            await ClientModel.destroy({
                where: {
                    client_id: client_id
                }
            });

            return res.status(200).json({
                msg: 'Cliente deletado com sucesso!'
            });

        }catch(error){
            console.log(error);
            return res.status(400).json({
                error: error.message
            });
        }
    }

}

module.exports = new ClientController();