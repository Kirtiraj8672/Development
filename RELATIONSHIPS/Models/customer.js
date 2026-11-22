//mongoose
const mongoose = require("mongoose");
const { type } = require("node:os");
const {Schema} = mongoose;

main().then(()=>{
    console.log("connected to DB");
}).catch((err)=>{
    console.log(err);
});
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

//schema 
const orderSchema = new Schema({
    item :{
        type : String,
    },
    price : {
        type : Number,
    }

});

const Order = mongoose.model(Order , );
