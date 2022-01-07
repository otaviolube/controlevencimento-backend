require('dotenv').config({
    path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env'
});

module.exports = {
    "secret": process.env.SECRET,
    "token_expiration": process.env.TOKEN_EXPIRATION
}