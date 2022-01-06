const jwt = require('jsonwebtoken');
const authConfig = require('../../src/config/auth');

const generateToken = (params = {}) => {
    console.log(authConfig.secret)
    const token = jwt.sign(params, authConfig.secret, {
        expiresIn: parseInt(authConfig.token_expiration)
    });

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) console.log(err);
        else console.log(decoded);
    })


    return token;


}

module.exports = generateToken;
