const jwt = require('jsonwebtoken');
const AuthConfig = require('../config/AuthConfig');

class JwtUtils {
    constructor(){
        this.secret = AuthConfig.secret;
    }

    generateToken(params = {}){
        return jwt.sign(params, this.secret, {
            expiresIn: parseInt(AuthConfig.token_expiration)
        });
    }

}

module.exports = new JwtUtils();
