const jwt = require('jsonwebtoken');
const AuthConfig = require('../../config/AuthConfig');
const JwtUtils = require('../../utils/JwtUtils');
const SessionModel = require('../models/SessionModel');
const { Op } = require('sequelize');
class AuthMiddleware{

    async validateToken(req, res, next){
        const authHeader = req.headers.authorization;
    
        if (!authHeader)
            return res.status(401).json({
                msg: "Token não fornecido!"
            });
    
        const parts = authHeader.split(' ');
    
        if(!parts.length === 2)
            return res.status(401).json({
                msg: "Token error!"
            });
    
        const [ scheme, token ] = parts;
    
        if(!/^Bearer$/i.test(scheme))
            return res.status(401).json({
                msg: "Token mal formatado!"
            });

        try{
            //Buscar uma sessão válida para o token. Se a sessão estiver inválida, o token tb estará
            const sessionValid = await SessionModel.findOne({
                where: {
                    [Op.and]: [
                        { session_token: token },
                        { session_status: true }
                    ]
                }
            });

            if(!sessionValid){
                return res.status(500).json({
                    msg: "Não há sessão válida para o referido token!"
                });
            }

            const decoded = await JwtUtils.validateToken(token);

            if(decoded){
                req.user_data = {
                    user_id: decoded.user_id,
                    user_name: decoded.user_name,
                    user_email: decoded.user_email,
                    user_login: decoded.user_login,
                    user_status: decoded.user_status,
                    user_type: decoded.user_type
                }

                return next();
            }else{
                return res.status(401).json({
                    msg: "Token inválido!"
                });
            }
        }catch(error){
            return res.status(401).json({
                msg: "Token inválido!",
                erro: error.message
            });
        }
    }

    refreshToken(req, res, next){

    }

    accessControlAdminOnly(req, res, next){
       
        if(!req.user_data){
            return res.status(401).json({
                msg: `Requisição mal formatada!`
            });
        }

        if(req.user_data.user_type !== 'admin'){
            return res.status(403).json({
                msg: `Não autorizado a acessar o recurso!`
            });
        }

        next();
    };

    accessControlPublic(req, res, next){

    }
}

module.exports = new AuthMiddleware();