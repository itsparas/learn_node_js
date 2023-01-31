const mongoose = require("mongoose");

// initialize Schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// creating Schema

const User = new mongoose.model("User", userSchema);

module.exports = User;
