const jwt = require('jsonwebtoken');
const secretKey = 'OkItsFine'

const authorization = (req, res, next)=>{
    const data = req.headers["authorization"] //token from client side 
    if(!data){
        return res.send({msg: "User not authorized"})
    }

    const token = data.split(" ")[1];

    try{   
        const validate = jwt.verify(token, secretKey)
        
        if(validate){ 
            return next();
        }
    }catch(err){
        return res.status(401).send({msg: "Unauthorized person"})
    }}

module.exports = authorization