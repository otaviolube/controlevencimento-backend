const UserModel = require('../models/UserModel');
const SessionModel = require('../models/SessionModel');
const { Op } = require('sequelize');
const HashUtils = require('../../utils/HashUtils');
const JwtUtils = require('../../utils/JwtUtils');
const { v4: uuidv4 } = require('uuid');
class AuthController {
    
    async login(req, res) {
        const { login, password } = req.body;

        if (!login || !password) {
            console.log('Usuário ou senha não informados.');
            res.status(400).json({
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
                res.status(400).json({
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

                    if(sessionValid){
                        console.log('Usuário já possui uma sessão válida');
                        return res.status(200).json({
                            msg: "Usuário já possui uma sessão válida",
                            token: sessionValid.session_token
                        });
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

                    if(!session){
                        console.log('Erro ao criar sessão do usuário!');
                        return res.status(500).json({
                            msg: "Erro ao criar sessão do usuário",
                        });
                    }

                    res.status(200).json({
                        msg: "Usuário autenticado",
                        token: session_token
                    });

                    console.log('Usuário autenticado com sucesso');
                } else {
                    console.log('Erro na autenticação do usuário');
                    res.status(500).json({
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

        if(!user_id){
            console.log('Parâmetro do usuário não passado');
            return res.status(500).json({
                msg: "Parâmetro user_id não encontrado!",
            });
        }

        const sessionsValid = await SessionModel.findAll({
            where: {
                user_id: user_id
            }
        });

        if(sessionsValid.length <= 0){
            console.log('Nenhuma sessão do usuário encontrada!');
            return res.status(200).json({
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

    async forget_password() {
        

    }
}

module.exports = new AuthController();