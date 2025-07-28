const mongoose = require("mongoose");


const DB_URI = process.env.DB_URL || "mongodb://localhost:27017/restaurant-reservation";

const connectDB = async () => {
  await mongoose.connect(DB_URI);
  console.log("DATABASE connected");
};

module.exports = connectDB;