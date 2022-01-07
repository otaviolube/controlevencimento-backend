const bcrypt = require('bcrypt');

class HashUtils {
    constructor(){
        this.saltRonds = 10;
    }

     async generateHash(password) {
        try{
            const salt = await bcrypt.genSalt(this.saltRonds);
            const hash = await bcrypt.hash(password, salt);
            return hash;
        }catch(error){
            console.error("Não foi possível criptografar a senha.");
        }
    }

     async validateHash(hash, password) {
        return await bcrypt.compare(password, hash);
    }
}

module.exports = new HashUtils();
