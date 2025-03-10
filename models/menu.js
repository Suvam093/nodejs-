const mongoose = require ('mongoose');

const menuSchema = new mongoose.Schema({
    name: String,
    price: {
        type: Number,
        required: true
    },
    taste: String,
    isVeg: {
        type: Boolean,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    num_of_sales: Number
})

const MenuItem = mongoose.model('MenuItem', menuSchema);

module.exports = MenuItem