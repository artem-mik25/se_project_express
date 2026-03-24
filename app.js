require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const { PORT = 3001 } = process.env;
const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/wtwr_db");

// Enable CORS for all origins
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/", routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
