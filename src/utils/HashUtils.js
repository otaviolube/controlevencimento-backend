require('dotenv').config({
    path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env'
});

const bcrypt = require('bcrypt');
const crypto = require('crypto');
class HashUtils {
    constructor() {
        this.saltRonds = parseInt(process.env.SALT_ROUNDS);
    }

    async generateHash(password) {
        try {
            const salt = await bcrypt.genSalt(this.saltRonds);
            const hash = await bcrypt.hash(password, salt);
            return hash;
        } catch (error) {
            console.error("Não foi possível criptografar a senha.");
        }
    }

    async validateHash(hash, password) {
        return await bcrypt.compare(password, hash);
    }

    generateRandomToken(){
        return crypto.randomBytes(20).toString('hex');
    }
}

module.exports = new HashUtils();
