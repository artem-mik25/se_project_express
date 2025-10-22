const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const { PORT = 3001 } = process.env;
const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/wtwr_db");

// Middleware to parse JSON
app.use(express.json());

// Temporary authorization middleware
app.use((req, res, next) => {
  req.user = {
    _id: "68f84675a712aecbd60130e6", // Test user _id
  };
  next();
});

// Routes
app.use("/", routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
