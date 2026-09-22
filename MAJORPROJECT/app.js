//express
const express = require("express");
const app = express();

//scheme export
const Listing = require("./model/listing.js");

//mongoose
const mongoose = require("mongoose");
main().then(()=>{
    console.log("connected to DB");
}).catch((err)=>{
    console.log(err);
});
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}


//root
app.get("/", (req,res)=>{
    res.send("Hi i am root");
});

//test listing route 
app.get("/testListing" , async (req,res) =>{
    let sampleListing = new Listing({
        title : "my new villa",
        description : " By The Beach",
        price : 1200,
        location : "Calungute , Goa ",
        country : "India",
    });
    await sampleListing.save();
    console.log("sample was saved");
    res.send("successful");
});

app.listen(8080, () => {
    console.log("server is listening to port 8080");
});

