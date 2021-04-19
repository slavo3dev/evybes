const express = require("express");
const app = express();

// Import Routes
const authRoutes = require("./routes/auth");

// import modules
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const PORT = process.env.PORT;

// routes
app.use("/api", authRoutes);

// app middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is Working on PORT: ${PORT}`);
});
