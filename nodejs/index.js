const mongoose = require('mongoose');
const main = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    const ProductSchema = new mongoose.Schema({
        Name: String,
        Brand: String,
        Price: Number,
        Category: String
    });
    const ProductsModel = mongoose.model('products', ProductSchema);
    let data = new ProductsModel({
        Name: "Redmi note 7 ",
        Brand: "Redmi",
        Price: 200,
        Category: "Mobile"
    });

    let result = await data.save();
    console.log(result);
}
main();