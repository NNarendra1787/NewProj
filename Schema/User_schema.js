const mongoose = require("mongoose");

const user_structure = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type : Number,
        required: true,
        maxLength: 10,
    },
    password : {
        type : String,
    }
})

const User_db = mongoose.model("User_db", user_structure);
module.exports = User_db;