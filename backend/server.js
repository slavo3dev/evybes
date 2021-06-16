const express = require("express");
const app = express();

// Import Routes
const authRoutes = require("./routes/auth");

// import modules
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

app.use(express.json());

require("dotenv").config();

// db connection
mongoose.connect(process.env.DB_CLOUD, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("MONGO DB CONNECTED"))
  .catch((err) => console.log("ERROR DB CONNECTION: ", err));

const PORT = process.env.PORT;

const corsOptions = {
  origin: process.env.CLIENT_URL,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// routes
app.use("/api", cors(corsOptions), authRoutes);

// app middleware
app.use(morgan("dev"));

app.listen(PORT, () => {
  console.log(`Server is Working on PORT: ${PORT}`);
});
