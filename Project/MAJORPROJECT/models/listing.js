const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type :String,
        required : true,
    },
    description: String,
    image: {
    filename: {
        type: String,
        default: "listingimage"
    },
    url: {
        type: String,
        default: "https://www.magnific.com/photos/beach-sunset"
    }
    },
    price: Number,
    location : String,
    country : String
});

const Listing = mongoose.model("listing", listingSchema);

module.exports = Listing;