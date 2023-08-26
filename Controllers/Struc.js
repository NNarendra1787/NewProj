const bcrypt = require("bcrypt");

const hashingPassword = (password)=>{
    try{
        const saltround = 10;
        const hashedPassword = bcrypt.hashSync(password, saltround);
        return hashedPassword;
    }catch(error){
        console.log(`Error occurse in hashing the password ${error}`);
    }
}

const comparePassword = (password, hashingPassword)=>{
    const compair = bcrypt.compareSync(password,hashingPassword);
    return compair;

}

module.exports = {
    hashingPassword,
    comparePassword
}