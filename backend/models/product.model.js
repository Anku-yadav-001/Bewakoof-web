
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    images: {
        type: [String],
        required: true,
    },
});

const ProductSchema1 = new mongoose.Schema({
    images: {
        type: [String],
        required: true,
    },
});

const ProductSchema2 = new mongoose.Schema({
    images: {
        type: [String],
        required: true,
    },
});

const ProductModel = mongoose.model("products",ProductSchema)
const ProductModel1 = mongoose.model("products1",ProductSchema1)
const ProductModel2 = mongoose.model("products2",ProductSchema2)


module.exports = ProductModel
module.exports = ProductModel1
module.exports = ProductModel2

