const UserModel = require('../models/UserModel');
const { Op } = require('sequelize');
const { validateHash } = require('../../utils/hash');
const generateToken = require('../../utils/jwt');

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
                if (await validateHash(user.user_password, password)) {
                    console.log('Usuário autenticado com sucesso');
                    res.status(200).json({
                        msg: "Usuário autenticado",
                        token: generateToken({
                            user_email: user.user_email,
                            user_login: user.user_login,
                            user_status: user.user_status,
                            user_type: user.user_type,
                            user_name: user.user_name
                        })
                    });
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

    async logout() {

    }

    async forget_password() {

    }
}

module.exports = new AuthController();