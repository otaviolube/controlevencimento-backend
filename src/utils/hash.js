const bcrypt = require('bcrypt');
const saltRonds = 10;

const generateHash = async (password) => {
    try{
        const salt = await bcrypt.genSalt(saltRonds);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    }catch(error){
        console.error("Não foi possível criptografar a senha.");
    }
}

const validateHash = async (hash, password) => {
    return await bcrypt.compare(hash, password);
}

module.exports = { generateHash, validateHash };