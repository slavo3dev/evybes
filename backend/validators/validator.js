const { check } = require("express-validator");

exports.userRegisterValidator = [
  check("name")
    .not()
    .isEmpty()
    .withMessage("Name is REQUIRED"),
  check("email")
    .isEmail()
    .withMessage("MAST BE VALID PASSWORD"),
  check("password")
    .isLength({ min: 5 })
    .withMessage("PASSWORD MUST BE AT LEAST 6 CHARACTERS LONG")
];
