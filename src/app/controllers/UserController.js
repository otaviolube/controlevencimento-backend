const UserModel = require('../models/UserModel');
const ResetTokenModel = require('../models/ResetToken');
const MailService = require('../../services/MailService');
const MailUtils = require('../../utils/MailUtils');
const { v4: uuidv4 } = require('uuid');
const HashUtils = require('../../utils/HashUtils');
const BucketService = require('../../services/BucketService');
const sharp = require('sharp');

class UserController {

    async createUserAndNotify(req, res) {
        const {
            user_name,
            user_email,
            user_login,
            user_type,
            user_status } = req.body;

        //Vamos criar uma senha aleatória, uma vez que a mesma é obrigatória no BD
        const user_password_hash = await HashUtils.generateHash(HashUtils.generateRandomToken());

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

            //Mandar email para o usuário informando a sua inserção no sistema
            //Mandar um link para o usuário trocar a senha
            //Senão orientá-lo que ele pode resetar a senha

            const token = HashUtils.generateRandomToken();

            const token_expiration = new Date();
            token_expiration.setHours(token_expiration.getHours() + 1);

            const reset_token_id = uuidv4();

            const reset_token = await ResetTokenModel.create({
                reset_token_id: reset_token_id,
                reset_token: token,
                reset_token_status: "created",
                reset_token_expiration: token_expiration,
                user_id: user.user_id
            });

            if (!reset_token) {
                console.log('Erro ao criar reset token do usuário');
                return res.status(500).json({
                    msg: "Erro ao criar token para reset de senha",
                });
            }

            const mailSended = await MailService.sendMail(
                "no-reply@competengenharia.com",
                user_email,
                "Controle de Vencimentos - Mudança de senha requisitada",
                MailUtils.getMailTemplate("email", {
                    user_name: user.user_name,
                    user_id: reset_token.user_id,
                    reset_token: reset_token.reset_token
                }),
            )

            console.log(mailSended);

            return res.status(200).json({
                msg: 'Usuário inserido com sucesso e email de confirmação enviado!',
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

        try {
            const user = await UserModel.findOne({
                where: {
                    user_id: user_id
                }
            });
            if (!user) {
                return res.status(400).json({
                    msg: "ID de usuário não encontrado"
                });
            }
            const userData = {
                user_id: user.user_id,
                user_name: user.user_name,
                user_email: user.user_email,
                user_login: user.user_login,
                user_image: user.user_image,
                user_type: user.user_type,
                user_status: user.user_status,
                created_at: user.createdAt,
                updated_at: user.updatedAt
            }
            return res.status(200).json({
                msg: "Usuário encontrado com sucesso.",
                user: userData
            });
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                error: error.message
            });
        }
    }

    async listUsers(req, res) {
        try {
            const users = await UserModel.findAll();
            const usersData = users.map(user => {
                return {
                    user_id: user.user_id,
                    user_name: user.user_name,
                    user_email: user.user_email,
                    user_login: user.user_login,
                    user_image: user.user_image,
                    user_type: user.user_type,
                    user_status: user.user_status,
                    created_at: user.createdAt,
                    updated_at: user.updatedAt
                }
            });
            return res.status(200).json({
                msg: "Usuários coletados com sucesso.",
                users: usersData
            });
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                error: error.message
            });
        }
    }

    async changeUser(req, res) {
        const user_id = req.params.id;

        try {
            const user = await UserModel.findOne({
                where: {
                    user_id: user_id
                }
            });
            if (!user) {
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

        } catch (error) {
            console.log(error);
            return res.status(400).json({
                error: error.message
            });
        }
    }

    async deleteUser(req, res) {
        const user_id = req.params.id;

        try {
            const user = await UserModel.findOne({
                where: {
                    user_id: user_id
                }
            });
            if (!user) {
                return res.status(400).json({
                    msg: "ID de usuário não encontrado"
                });
            }

            UserModel.destroy({ where: { user_id: user_id } })

            return res.status(200).json({
                msg: 'Usuário deletado com sucesso!'
            });

        } catch (error) {
            console.log(error);
            return res.status(400).json({
                error: error.message
            });
        }
    }

    async uploadPhoto(req, res) {
        if (!req.file.originalname || !req.file.buffer) {
            console.log("Parâmetros da imagem insuficientes!");
            return res.status(400).json({
                msg: "Parâmetros da imagem insuficientes!"
            });
        }

        const fileName = `${req.user_data.user_id}.png`;

        const fileBuffer = await sharp(req.file.buffer)
                                    .png()
                                    .toBuffer();

        const statusFileUploaded = await BucketService.uploadFile(
            "controle-vencimentos",
            `userPhotos/${fileName}`,
            fileBuffer);

        if (!statusFileUploaded) {
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