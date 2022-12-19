const { mongoose, Schema } = require("mongoose");

const userSchema = new Schema({
  username: String,
  firstname: String,
  lastname: String,
  age: Number,
});

const Users = mongoose.model("users", userSchema);

module.exports = { Users };
