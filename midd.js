const jwt = require('jsonwebtoken');
const secretKey = 'OkItGood'

const authorization = (req, res, next)=>{
    const token = req.headers["authorization"] //token from client side 
    if(token == null){
        return res.send({msg: "User not authorized"})
    }

    const validate = jwt.verify(token, secretKey)

    if(!validate){
        return res.status(401).send({msg: "Unauthorized person"})
    }

    next();
}

module.exports = authorization