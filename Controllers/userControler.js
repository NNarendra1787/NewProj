const DataBase = [];
const bcrypt = require('bcrypt')
const saltround = 10;
const jwt = require('jsonwebtoken')
const secretKey = "OkItsFine"


function register(req, res){
    const RegisterData = req.body;
    console.log(RegisterData);

    const user = DataBase.find((Client)=>{
        if(Client.email === RegisterData.email){
            return Client
        }
    })

    if(user){
        return res.send("User already register please login ")
    }

    const hashpassword = bcrypt.hashSync(RegisterData.password, saltround)

    const tempObj = {
        name: RegisterData.name,
        email: RegisterData.email,
        password: hashpassword,
        contact: RegisterData.contact
    }
    const token = jwt.sign({userEmail: RegisterData.email}, secretKey, {expiresIn: '3h'})
    
    DataBase.push(tempObj)
    console.log(DataBase);

    return res.send({msg: "user register successfully", token : token, name: RegisterData.name})
}

function login(req, res){
    const LoginData = req.body;

    const user = DataBase.find((Client)=>{
        if(Client.email === LoginData.email){
            return Client
        }
    })

    if(!user){
        return res.send("YOu are not Register, register first")
    }

    const validate = bcrypt.compareSync(LoginData.password, user.password)

    if(validate){
        const token = jwt.sign({userEmail: LoginData.email},secretKey, {expiresIn: '5h'})
        return res.send("user login")
    }

    return res.send({msg: "user register", token: token, name: LoginData.name})
}

module.exports = {
    register,
    login
}