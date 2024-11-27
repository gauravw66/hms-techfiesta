const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Retrieve the URI from the environment variable
const uri = process.env.MONGO_URI;

if (!uri) {
  console.error("MongoDB URI is undefined. Check your .env file.");
  process.exit(1); // Exit if URI is not defined
} else {
  console.log(uri);
}

async function connectToDatabase() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB with Mongoose");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

module.exports = connectToDatabase;
