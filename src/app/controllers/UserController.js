const UserModel = require('../models/UserModel');
const { v4: uuidv4 } = require('uuid');
const HashUtils = require('../../utils/HashUtils');
const BucketService = require('../../services/BucketService');
class UserController {
    async createUser(req, res) {
        const {
            user_name,
            user_password,
            user_email,
            user_login,
            user_type,
            user_status } = req.body;

        const user_password_hash = await HashUtils.generateHash(user_password);

        try {
            const usersNumber = await UserModel.count({
                where: {
                    user_email
                }
            });

            if (usersNumber > 0) {
                return res.status(401).json({
                    msg: `Email já existe na base de dados`
                });
            }
            const user_id = uuidv4();
            const user = await UserModel.create({
                user_id,
                user_name,
                user_password: user_password_hash,
                user_email,
                user_login,
                user_type,
                user_status
            });

            return res.status(200).json({
                msg: 'Usuário inserido com sucesso!',
                user: {
                    user_id: user.user_id,
                    user_name: user.user_name,
                    user_email: user.user_email,
                    user_login: user.user_login,
                    user_type: user.user_type,
                    user_status: user.user_status
                }
            });
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                error: error.message
            });
        }
    }

    async showUser(req, res) {
        const user_id = req.params.id;

        try{
            const user = await UserModel.findOne({
                where: {
                    user_id: user_id
                }
            });
            if(!user){
                return res.status(400).json({
                    msg: "ID de usuário não encontrado"
                });
            }
            return res.status(200).json({
                msg: "Usuário encontrado com sucesso.",
                users: user
            });
        }catch(error){
            console.log(error);
            return res.status(400).json({
                error: error.message
            });
        }
    }

    async listUsers(req, res) {
        try{
            const users = await UserModel.findAll();
            return res.status(200).json({
                msg: "Usuários coletados com sucesso.",
                users: users
            });
        }catch(error){
            console.log(error);
            return res.status(400).json({
                error: error.message
            });
        }
    }

    async changeUser(req, res) {
        const user_id = req.params.id;

        try{
            const user = await UserModel.findOne({
                where: {
                    user_id: user_id
                }
            });
            if(!user){
                return res.status(400).json({
                    msg: "ID de usuário não encontrado"
                });
            }
            
            const user_new_data = req.body;

            await UserModel.update({
                user_id: user_new_data.user_id,
                user_name: user_new_data.user_name,
                user_email: user_new_data.user_email,
                user_login: user_new_data.user_login,
                user_type: user_new_data.user_type,
                user_status: user_new_data.user_status
            }, {
                where: {
                    user_id: user_id
                }
            });

            return res.status(200).json({
                msg: 'Usuário atualizado com sucesso!'
            });

        }catch(error){
            console.log(error);
            return res.status(400).json({
                error: error.message
            });
        }
    }

    async deleteUser(req, res) {
        const user_id = req.params.id;

        try{
            const user = await UserModel.findOne({
                where: {
                    user_id: user_id
                }
            });
            if(!user){
                return res.status(400).json({
                    msg: "ID de usuário não encontrado"
                });
            }
            
            UserModel.destroy({where: {user_id: user_id}})

            return res.status(200).json({
                msg: 'Usuário deletado com sucesso!'
            });

        }catch(error){
            console.log(error);
            return res.status(400).json({
                error: error.message
            });
        }
    }

    async uploadPhoto(req, res){
        if(!req.file.originalname || !req.file.buffer){
            console.log("Parâmetros da imagem insuficientes!");
            return res.status(400).json({
                msg: "Parâmetros da imagem insuficientes!"
            });
        }

        const statusFileUploaded = await BucketService.uploadFile(
            "controle-vencimentos",
            `photos/${req.file.originalname}`,
            req.file.buffer);

        if(!statusFileUploaded){
            return res.status(400).json({
                msg: "Erro no envio do arquivo"
            });
        }

        return res.status(201).json({
            msg: "Arquivo enviado com sucesso!"
        });
    }
}

module.exports = new UserController();