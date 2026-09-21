//express
const express = require("express");
const app = express();

//mongoose

const mongoose = require("mongoose");

main().
    then((res)=>{
        console.log("connected to DB");
    })
    .catch((err)=>{
        console.log(err);
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

//ejs

const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname , "views"))

//url encoder to parse url
app.use(express.urlencoded({extended :true }));


//listing import 
const Listing = require("./models/listing.js");


//basic start 

app.get("/" , (req, res ) => {
    res.send("hi i am root ");
});


//listing 

// app.get("/testListing" ,async (req ,res ) => {
//     let sampleListing = new Listing ({
//         title: "my new villa ",
//         description : "By the beach ",
//         price: 1200,
//         location: "Calangute , Goa ",
//         country : "India ",

//     });
//      await sampleListing.save();
//      console.log("sample was saved");
//      res.send("successful testing");

// });


//index route 
app.get("/listings", async (req, res) => {
    let allListings = await Listing.find({});
    res.render("listings/index.ejs" , {allListings});
});


//show route 

app.get("/listing/:id" , async(req , res ) => {
    let{id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs" , { listing });
});








//server or port 

app.listen(8080 , () => {
    console.log("server is listening to port 8080");
});

