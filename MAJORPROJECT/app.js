//express
const express = require("express");
const app = express();

//url encoder 
app.use(express.urlencoded({extended: true}));

//module importing 
const Listing = require("./models/listing");

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

//method-override 
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

//ejs-mate
const ejsMate = require("ejs-mate");
app.engine("ejs" , ejsMate);

//to use static file and css file 
app.use(express.static(path.join(__dirname,"/public")));

//importing wrapAsync and ExpressError from util
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");

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
app.get("/listings" , wrapAsync(async (req,res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs" , {allListings});
}));

//new route
app.get("/listings/new" , (req,res) => {
    res.render("listings/new.ejs");
});

//show route 
app.get("/listings/:id" , wrapAsync(async(req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs" , {listing});
}));

// Create route
app.post("/listings", wrapAsync(async (req, res) => {
        //due to client mistake server can not handle this error 
        if(!req.body.listing){
            throw new ExpressError(400, "send valid data for listing "); 
        }
        
        // console.log("FORM DATA:", req.body);

        const newListing = new Listing(req.body.listing);

        // console.log("NEW LISTING:", newListing);

        await newListing.save();

        res.redirect("/listings");
        }
    ));
    
//edit route 
app.get("/listings/:id/edit" , wrapAsync(async (req,res) => {
    let{id} = req.params;
    const listing =await Listing.findById(id);
    res.render("listings/edit.ejs" , {listing});
}));

//update route 
app.put("/listings/:id" , wrapAsync(async(req,res) => {
    //due to client mistake server can not handle this error 
        if(!req.body.listing){
            throw new ExpressError(400, "send valid data for listing "); 
        }

    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing})
    res.redirect(`/listings/${id}`);

}));

//DELETE ROUTE 
app.delete("/listings/:id", wrapAsync(async (req,res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);   
    console.log(deletedListing);
    res.redirect("/listings");
}));


// Catch-all route: Handles requests to undefined routes and throws a 404 error
app.all("/{*splat}", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
});


//middleware
app.use((err,req,res,next)=>{
    let{statusCode = 500 , message = "Something went wrong!!! " } = err;
    res.status(statusCoderender("error.ejs",{message});
    //res.status(statusCode).send(message);
});

app.listen(8080 , () => {
    console.log("server is listing to port 8080");
});

