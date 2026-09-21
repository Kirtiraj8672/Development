const mongoose = require("mongoose");

main().then(() => {
    console.log("connection successful");
}).catch((err) =>{
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");    
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20 , 
    },
    author: {
        type: String,
    },
    price :{
        type: Number,
        min : [1, "Price is too low for amazon selling"],
    },
    discount:{
        type: Number,
        default: 0,
    },
    category :{
        type: String,
        enum: ["fiction" , "Non-fiction"]
    },
    genre: [String],
});

const Book = mongoose.model("Book" , bookSchema);

//adding book to database 

// let book1 = new Book({
//     title:"Mathematics XII",
//     author: "RD sharma",
//     price: 1200,
// });

// let book1 = new Book({
//     title:"Mathematics VIII",
//     price: 1200,
// });

// let book1 = new Book({
//     title:"Marvel comics v2 ",
//     price: "600",
//     genre : ["Comics" , "Superhero" ,"Fiction"]
// });

// book1.save().then((res) =>{
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

//bookfindandupdate

Book.findByIdAndUpdate("6aaacda7b1a46148ad8735d8" , 
        {price : -100} , {
        runValidators : true}).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err.errors.price.properties.message);
    });