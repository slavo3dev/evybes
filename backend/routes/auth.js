const express = require("express");
const router = express.Router();
const { userRegisterValidator } = require("../validators/validator");
const { runValidation } = require("../validators");

// import from controllers
const { register } = require("../controllers/auth");

router.post("/register", userRegisterValidator, runValidation, register);

module.exports = router;
