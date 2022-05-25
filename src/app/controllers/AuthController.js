const UserModel = require('../models/UserModel');
const SessionModel = require('../models/SessionModel');
const ResetTokenModel = require('../models/ResetToken');
const MailService = require('../../services/MailService');
const MailUtils = require('../../utils/MailUtils');
const { Op } = require('sequelize');
const HashUtils = require('../../utils/HashUtils');
const JwtUtils = require('../../utils/JwtUtils');
const { v4: uuidv4 } = require('uuid');
class AuthController {

    async login(req, res) {
        const { login, password } = req.body;

        if (!login || !password) {
            console.log('Usuário ou senha não informados.');
            return res.status(400).json({
                msg: "Usuário ou senha não informados.",
            });
        }

        try {
            const user = await UserModel.findOne({
                where: {
                    [Op.or]: [
                        { user_login: login },
                        { user_email: login }
                    ]
                }
            });

            if (!user) {
                console.log('Usuário não encontrado');
                return res.status(400).json({
                    msg: "Usuário não encontrado",
                });
            } else {
                if (await HashUtils.validateHash(user.user_password, password)) {

                    const sessionValid = await SessionModel.findOne({
                        where: {
                            [Op.and]: [
                                { user_id: user.user_id },
                                { session_status: true }
                            ]
                        }
                    });

                    console.log(sessionValid);

                    if (sessionValid) {
                        //Vamos converir se o token da sessão já expirou
                        const tokenOk = await JwtUtils.validateToken(sessionValid.session_token);
                        if (tokenOk) {
                            console.log('Usuário já possui uma sessão válida');
                            return res.status(200).json({
                                msg: "Usuário já possui uma sessão válida",
                                token: sessionValid.session_token
                            });
                        } else {
                            //Preciso invalidar o token na sessão
                            sessionValid.session_status = false;
                            await sessionValid.save();
                        }
                    }

                    const session_id = uuidv4();
                    const session_token = JwtUtils.generateToken({
                        user_id: user.user_id,
                        user_email: user.user_email,
                        user_login: user.user_login,
                        user_status: user.user_status,
                        user_type: user.user_type,
                        user_name: user.user_name
                    });

                    const session = await SessionModel.create({
                        session_id,
                        session_token,
                        session_status: true,
                        user_id: user.user_id
                    });

                    if (!session) {
                        console.log('Erro ao criar sessão do usuário!');
                        return res.status(500).json({
                            msg: "Erro ao criar sessão do usuário",
                        });
                    }

                    return res.status(200).json({
                        msg: "Usuário autenticado",
                        token: session_token
                    });

                    console.log('Usuário autenticado com sucesso');
                } else {
                    console.log('Erro na autenticação do usuário');
                    return res.status(500).json({
                        msg: "Senha inválida",
                    });
                }
            }
        } catch (error) {
            console.error(error);
        }

    }

    async logout(req, res) {

        const user_id = req.user_data?.user_id;

        if (!user_id) {
            console.log('Parâmetro do usuário não passado');
            return res.status(500).json({
                msg: "Parâmetro user_id não encontrado!",
            });
        }

        const sessionsValid = await SessionModel.findAll({
            where: {
                [Op.and]: [
                    { user_id: user_id },
                    { session_status: true }
                ]
            }
        });

        if (sessionsValid.length <= 0) {
            console.log('Nenhuma sessão do usuário encontrada!');
            return res.status(500).json({
                msg: "Nenhuma sessão do usuário encontrada",
            });
        }

        sessionsValid.forEach(async (session) => {
            session.session_status = false;
            await session.save();
        });

        return res.status(200).json({
            msg: "Logout realizado com sucesso!",
        });

    }

    async forget_password(req, res) {
        const { email } = req.body;

        try {
            const user = await UserModel.findOne({
                where: {
                    user_email: email
                }
            });

            if (!user) {
                console.log('Usuário não encontrado');
                return res.status(400).json({
                    msg: "Usuário não encontrado",
                });
            }

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

            console.log(reset_token.reset_token);

            const mailSended = await MailService.sendMail(
                "no-reply@competengenharia.com",
                email,
                "Controle de Vencimentos - Mudança de senha requisitada",
                MailUtils.getMailTemplate("email", {
                    user_name: user.user_name,
                    user_id: reset_token.user_id,
                    reset_token: reset_token.reset_token
                }),
            )

            console.log(mailSended);

            return res.status(200).json({
                msg: "E-mail para reset de senha enviado com sucesso!",
            });
        } catch (error) {
            return res.status(400).send({ msg: "Erro ao resetar a senha do usuário. Tente novamente!" });
            console.log(error.message)
        }
    }

    async reset_password(req, res) {
        const { newpassword, user, token } = req.body;

        try {
            if (!user || !token)
                return res.status(401).json({
                    msg: "Parâmetros não fornecidos!"
                });

            const user_newpassword_hash = await HashUtils.generateHash(newpassword);

            const userSelected = await UserModel.findOne({
                where: {
                    user_id: user
                }
            });

            userSelected.user_password = user_newpassword_hash;

            await userSelected.save();

            return res.status(200).json({
                msg: "Senha modificada com sucesso!"
            });

        } catch (error) {
            console.log(error.message);
            return res.status(401).json({
                msg: "Erro ao resetar a senha do usuário!"
            });
        }

    }
}

module.exports = new AuthController();