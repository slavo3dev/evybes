const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

// Register User EndPoint
app.get("/api/register", (req, res) => {
  res.json({
    data: "Register EndPoint",
  });
});

app.listen(PORT, () => {
  console.log(`Server is Working on PORT: ${PORT}`);
});
