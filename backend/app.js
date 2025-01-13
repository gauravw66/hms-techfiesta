const express = require("express");
const dotenv = require("dotenv");
// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

const { v4: uuidv4 } = require("uuid");
console.log(uuidv4());

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// patient routes
app.use("/api/patient", require("./routes/patientRoutes"));

// admin routes
app.use("/api/admin", require("./routes/adminRoutes"));

// Start the server
const PORT = process.env.PORT;
console.log(PORT);
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
