//express
const express = require("express");
const app = express();

//url encoder 
app.use(express.urlencoded({extended: true}));

//module importing 
const Listing = require("../MAJORPROJECT/models/listing");

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



//root
app.get("/" , (req,res) => {
    res.send("hi i am groot");
})

//test route 
// app.get("/testListing" , async(req,res) => {
//     let sampleListing = new Listing({
//         title : "My New Villa",
//         description:"by the beach",
//         price: 1200,
//         location: "Calangute , Goa",
//         country: "India"
//     })
//    await sampleListing.save();
//    console.log("Sample was saved ");
//    res.send("successful testing");
// })

//index route 
app.get("/listings" , async (req,res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs" , {allListings});
})

//new route
app.get("/listings/new" , (req,res) => {
    res.render("listings/new.ejs");
});

//show route 
app.get("/listings/:id" , async(req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs" , {listing});
})


app.listen(8080 , () => {
    console.log("server is listing to port 8080");
})

