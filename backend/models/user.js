const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      require: true,
      max: 12,
      unique: true,
      index: true,
      lowercase: true,
    },
    name: {
      type: String,
      trim: true,
      require: true,
      max: 12,
    },
    email: {
      type: String,
      trim: true,
      require: true,
      unique: true,
      max: 32,
      lowercase: true,
    },
    hash_password: {
      type: String,
      require: true,
    },
    salt: String,
    role: {
      type: String,
      default: "subscriber",
    },
    restetPasswordLink: {
      data: String,
      default: "",
    },
  },
  { timestamps: true }
);

// virtual fileds
