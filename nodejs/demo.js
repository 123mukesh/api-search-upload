const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/test");

const ProductSchema = new mongoose.Schema({
    Name: String,
    Brand: String,
    Price: Number,
    Category: String
});

const saveInDB = async()=>{
    const Product = mongoose.model('products', ProductSchema);

    let data = new Product({
        Name: "Vivo u10 ",
        Brand: "Vivo",
        Price: 150,
        Category: "Mobile"
    });

    let result = await data.save();
    console.log(result);
}
const updateInDB = async()=>{
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.updateOne(
        {Name:"Iphone"},
        {
            $set:{Price:300, Name:"Iphone14 plus"}
        }
    )
    console.log(data);

}

const deleteInDB = async()=>{
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.deleteOne({Name:"M40"})
  
    console.log(data);

    }


const findInDB = async()=>{
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.find({Name:"Iphone14 plus 1"})
  
    console.log(data);

    }
  
    findInDB();