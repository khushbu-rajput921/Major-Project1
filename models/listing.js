const mongoose = require("mongoose");
const { listingSchema } = require("../schema");
const Schema = mongoose.Schema;
const Review = require("../models/review");

const listSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true,
        required:true,
    },
    image: {
       url: String,
       filename:String,
    },

    price: {
        type: Number,
        required: true,
        min: 0,
    },
    location: {
        type: String,
        required: true,
        trim: true,
    },
    country: {
        type: String,
        required: true,
        trim: true,
    },
    reviews:[{
        type : mongoose.Schema.Types.ObjectId,
        ref :"Review",
    }],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "User",
    },
});

//after the deletion of listings then delete reviews data from mongodb database
//mongoose middleware
listSchema.post("findOneAndDelete" , async function (listing)  {
    if(listing){
   await Review.deleteMany({_id : {$in: listing.reviews } });
    }
});

const Listing = mongoose.model("Listing", listSchema);
module.exports = Listing;
