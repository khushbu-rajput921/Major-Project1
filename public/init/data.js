const { fileLoader } = require("ejs");

const defaultImage = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"; // Sample default

const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming cottage with stunning ocean views.",
    image: {
      filename: "listingimage",
      url : "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 1500,
    location: "Malibu",
    country: "United States"
  },
  {
    title: "Modern Loft Suite",
    description: "Stay in the heart of the city in this stylish and modern loft.",
    image: 
    {
      filename: "listingimage",
      url :"https://images.unsplash.com/photo-1593642532973-d31b6557fa68", // Fixed
    },
      price: 1000,
    location: "New York",
    country: "United States"
  },
  {
    title: "Rustic Mountain Cabin",
    description: "Unplug and relax in this cozy mountain retreat.",
    image: 
    { filename: "listingimage" ,
      url : defaultImage
    },
    price: 1200,
    location: "Aspen",
    country: "United States"
  },
  {
    title: "Desert Dome Stay",
    description: "Experience the quiet beauty of the desert in a luxury dome.",
    image:{ 
    filename:"listingimage",
    url:defaultImage,
    },
    price: 1100,
    location: "Joshua Tree",
    country: "United States"
  },
  {
    title: "Charming Countryside Bungalow",
    description: "Relax in a peaceful countryside setting with modern comfort.",
    image:{
      filename:"listingimage", 
      url:"https://images.unsplash.com/photo-1554995207-c18c203602cb",},
    price: 900,
    location: "Nashville",
    country: "United States"
  },
  {
    title: "Ski Chalet Retreat",
    description: "Hit the slopes and unwind in this ski-in/ski-out chalet.",
    image: {filename:"listingimage",
      url :  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    },
    price: 2000,
    location: "Vail",
    country: "United States"
  },
]

module.exports = { data: sampleListings };
