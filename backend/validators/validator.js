const { check } = require("express-validator");

exports.registerValidator = [
  check("name")
    .not()
    .isEmpty()
    .withMessage("Name is REQUIRED"),
  check("email")
    .not()
    .isEmpty()
    .withMessage("MAST BE VALID PASSWORD"),
  check("password")
    .not()
    .isLength({ min: 6 })
    .withMessage("PASSWORD MUST BE AT LEAST 6 CHARACTERS LONG")
];
