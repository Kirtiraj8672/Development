//express
const express = require("express");
const app = express();

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

//ejs
const path = require("path");
app.set("views" , path.join(__dirname,"views"));
app.set("view engine" ,"ejs");



app.get("/" , (req,res) => {
    res.send("hi i am groot");
})

app.listen(8080 , () => {
    console.log("server is listing to port 8080");
})

