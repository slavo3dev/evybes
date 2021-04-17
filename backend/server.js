const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

// Import Routes
const authRoutes = require("./routes/auth");

// import modules
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

// Middleware
app.use("/api", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is Working on PORT: ${PORT}`);
});
