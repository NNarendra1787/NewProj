const mongoose = require("mongoose");

const Cart_Schema = mongoose.Schema({
    // email: {
    //     type: String,
    //     // required: true,
    // },
    no: {
        type: Number,
    },
    title: {
        type: String,
        required: true,
    },
    title2: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required : true,
    },
    price: {
        type: Number,
        required : true,
    },
    crossPrice: {
        type: Number,
        required : true,
    },
    rating: {
        type: Number,
        required : true,
    },
    decriptions: {
        type: String,
        required : true,
    },
    cat: {
        type: String,
        required : true,
    },
    comp: {
        type: String,
        // required: true,
    }
})

const Cart = mongoose.model("Cart", Cart_Schema)
module.exports = Cart