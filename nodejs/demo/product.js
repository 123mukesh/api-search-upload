const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    Name : String,
    Brand: String,
    Price: Number,
    Category: String
});
module.exports=mongoose.model("products",ProductSchema)