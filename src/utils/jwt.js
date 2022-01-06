const jwt = require('jsonwebtoken');
const authConfig = require('../../src/config/auth');

const generateToken = (params = {}) => {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: authConfig.toker_expiration
    });
}

module.exports = generateToken;
