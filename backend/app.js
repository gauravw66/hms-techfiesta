const express = require("express");
const dotenv = require("dotenv");
const connectToDatabase = require("./connection");

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectToDatabase().then(() => {
  console.log("Database connection established");
});

// Define a simple route
app.get("/", (req, res) => {
  res.send("welcome to jgmsa!");
});

// Start the server
const PORT = process.env.PORT;
console.log(PORT);
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
