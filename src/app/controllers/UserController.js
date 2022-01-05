const UserModel = require('../models/UserModel');
const { v4: uuidv4 } = require('uuid');
class UserController {
    constructor() {

    }

    async createUser(req, res) {
        const {
            user_name,
            user_password,
            user_email,
            user_login,
            user_type,
            user_status } = req.body;

        try {
            const usersNumber = await UserModel.count({
                where: {
                    user_email
                }
            });

            console.log(usersNumber);

            if (usersNumber > 0) {
                return res.status(401).json({
                    msg: `Email já existe na base de dados`
                });
            }
            const user_id = uuidv4();
            const user = await UserModel.create({
                user_id,
                user_name,
                user_password,
                user_email,
                user_login,
                user_type,
                user_status
            });
            return res.status(200).json({
                msg: 'Usuário inserido com sucesso!',
                user: user
            })
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                error: error.message
            })
        }
    }

    showUser() {

    }

    listUsers() {

    }

    changeUser() {

    }

    deleteUser() {

    }
}

module.exports = new UserController();