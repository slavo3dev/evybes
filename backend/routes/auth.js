const express = require("express");

const router = express.Router();

router.get("/register", (req, res) => {
  res.json({
    data: "Register EndPoint",
  });
});

module.exports = router;
