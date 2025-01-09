const express = require("express");
const dotenv = require("dotenv");
// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

app.use("/addDummyPatient", require("./routers/addPatientRouter"));

// Start the server
const PORT = process.env.PORT;
console.log(PORT);
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
