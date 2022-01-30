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

    async validateToken(token){
        return new Promise(function(resolve, reject){
            jwt.verify(token, AuthConfig.secret, (err, decoded) => {
                if(err){
                    resolve(null);
                    console.log(err);
                }else{
                    resolve(decoded);
                }
            })
        })
    }

}

module.exports = new JwtUtils();
