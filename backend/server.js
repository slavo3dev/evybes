const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

// Import Routes
const authRoutes = require("./routes/auth");

// Middleware
app.use("/api", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is Working on PORT: ${PORT}`);
});
