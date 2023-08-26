// const DataBase = [];
// const bcrypt = require("bcrypt");
// const saltround = 10;
const User_db = require("../Schema/User_schema");
const jwt = require("jsonwebtoken");
const { hashingPassword, comparePassword } = require("./Struc");
const secretKey = "OkItsFine";

const Register = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    //check user
    const existingUser = await User_db.findOne({ email: email });

    // existing user
    if (existingUser) {
      return res.send({
        success: true,
        msg: "User's email alrady on server...!!!",
        user: existingUser,
      });
    }
    // registring the new user
    const hashPassword = hashingPassword(password);

    //saving the data
    const tempObj = new User_db({
      name: name,
      Email: email,
      phone: phone,
      password: hashPassword,
    });

    const user = await tempObj.save();
    const token = jwt.sign({ email: email }, secretKey, { expiresIn: "5d" });

    return res.send({
      success: true,
      msg: "User Ragisterd Successfully",
      user: user,
      token: token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ success: false, msg: "Error in Registration", err });
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //check user
    const user = await User_db.findOne({ email: email });

    if (!user) {
      return res.status(404).send({
        success: false,
        msg: "User is not Registerd Please Registed first",
      });
    }

    const matching = comparePassword(password, user.password);
    const token = jwt.sign({ email: email }, secretKey, { expiresIn: "15d" });

    if (matching) {
      return res.send({
        success: true,
        msg: "User Logged in Successfully",
        user: user,
        token: token,
      });
    }

    //token is comming
    return res.status(200).send({ success: false, msg: "Password is Invalid" });

  } catch (err) {
    console.log(err);
    res.status(500).send({ success: false, msg: "Error in logong user ", err });
  }
};

// function register(req, res){
//     const RegisterData = req.body;
//     console.log(RegisterData);

//     const user = DataBase.find((Client)=>{
//         if(Client.email === RegisterData.email){
//             return Client
//         }
//     })

//     if(user){
//         return res.send("User already register please login ")
//     }

//     const hashpassword = bcrypt.hashSync(RegisterData.password, saltround)

//     const tempObj = {
//         name: RegisterData.name,
//         email: RegisterData.email,
//         password: hashpassword,
//         contact: RegisterData.contact
//     }
//     const token = jwt.sign({userEmail: RegisterData.email}, secretKey, {expiresIn: '3h'})

//     DataBase.push(tempObj)
//     console.log(DataBase);

//     return res.send({msg: "user register successfully", token : token, name: RegisterData.name})
// }

// function login(req, res){
//     const LoginData = req.body;

//     const user = DataBase.find((Client)=>{
//         if(Client.email === LoginData.email){
//             return Client
//         }
//     })

//     if(!user){
//         return res.send("YOu are not Register, register first")
//     }

//     const validate = bcrypt.compareSync(LoginData.password, user.password)

//     if(validate){
//         const token = jwt.sign({userEmail: LoginData.email},secretKey, {expiresIn: '5h'})
//         return res.send("user login")
//     }

//     return res.send({msg: "user register", token: token, name: LoginData.name})
// }

module.exports = {
  Register,
  Login,
};
