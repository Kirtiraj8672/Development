
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
    },

    image: {
        type: String,
        default: "https://images.unsplash.com/photo-1792607851482-8f7874e269b7?q=80&w=987&auto=format&fit=crop"
    },

    price: {
        type: Number,
    },

    location: {
        type: String,
    },

    country: {
        type: String,
    }
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
