const mongoose = require("mongoose");
const Listings = require("../models/listing.js");
const initData = require("./data.js");


main().then(() => {
    console.log("connection successful");
})
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');

}

const initDB = async () =>{
    await Listings.deleteMany({});
    initData.data= initData.data.map((obj) =>({
        ...obj , owner:"688874bc0ec978e5f4021e17",
    }));
    await Listings.insertMany(initData.data);
    console.log("database was initialized.");
};

initDB();