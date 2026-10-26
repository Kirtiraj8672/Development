//mongoose
const mongoose = require("mongoose");

const Schema  = mongoose.Schema;

const listingSchema = new Schema ({
    title : {
        type: String,
        required :true,
    },
    description : {
        type:String,
    },
    image : {
        type:String,
        set: (v) => v === "" ? "deafult link " : v, 
    },
    price : { 
        type:Number,
    },
    location : {
        type : String,
    },
    country : {
        type:String,
    }
});

const Listing = mongoose.model("Listing",listingSchema);
modules.export = Listing;