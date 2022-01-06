const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');

const validateToken = (req, res, next) => {
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

    console.log(scheme, token)

    console.log(authConfig.secret)

    jwt.verify(token, authConfig.secret, (err, decoded) => {
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

const accessControl = () => {};

module.exports = validateToken;