//mongoose
const mongoose = require("mongoose");
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
const userSchema = new Schema({
    username :{
        type : String,
    },
    addresses: [
        {
            location: String,
            city : String,
        }
    ]

});

//creating model from schema 
const User = mongoose.model("User" , "userSchema");