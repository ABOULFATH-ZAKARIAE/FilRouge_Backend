const { ObjectId } = require("mongodb")
const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },

    description: {
        type: String,
        require: true,
    
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    category: {
        type: ObjectId,
        ref: 'Category',
        require: true
    },
    shipping: {
        type: Boolean,
        default: false
    },
    sold: {
        type: Number,
        default: 0
    },
}, {timestamps: true})

module.exports = mongoose.model("Product", productSchema)