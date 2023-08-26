const mongoose = require("mongoose");

const product_Schema = mongoose.Schema({
    no: {
        type: Number,
        // required: true,
    },
    title: {
        type: String,
        required: true,
    },
    title2 : {
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
        // required : true,
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

const Products = mongoose.model("Product", product_Schema);
module.exports = Products;