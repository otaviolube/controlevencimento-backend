const jwt = require('jsonwebtoken');
const AuthConfig = require('../../config/AuthConfig');

class AuthMiddleware{

    validateToken(req, res, next){
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
       
        jwt.verify(token, AuthConfig.secret, (err, decoded) => {
            if(err){
                console.log(err)
                return res.status(401).json({
                    msg: "Token inválido!"
                });
            }
            
            req.user_data = {
                user_name: decoded.user_name,
                user_email: decoded.user_email,
                user_login: decoded.user_login,
                user_status: decoded.user_status,
                user_type: decoded.user_type
            }
    
            return next();
        });
    }

    accessControlAdminOnly(req, res, next){
        console.log(req.user_data)
        
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