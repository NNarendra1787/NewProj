const mongoose = require('mongoose');

mongoose.set('strictQuery', true)

// const url = "mongodb://127.0.0.1:27017";
const url = "mongodb+srv://narendranarwade2002:Narendra2002@project.kmdyidh.mongodb.net/?retryWrites=true&w=majority";


const connection = async()=>{
    try{
        await mongoose.connect(url);
        console.log("Connection Established !!!");
    }
    catch(err){
        console.log("Error Creating Connection !!!");
    }
}

module.exports = connection