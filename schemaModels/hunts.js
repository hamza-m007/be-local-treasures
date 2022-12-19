const { mongoose, Schema } = require("mongoose");

const huntSchema = new Schema({
  //   name: String,
  //   location: Object,
  //   checkpoint: {1:},
  //   title: String,
});
const checkpointSchema = new Schema({
  1: latlongSchema,
});

const latlongSchema = new Schema({
  lat: Number,
  long: Number,
});

const Hunts = mongoose.model("hunts", huntSchema);

module.exports = { Hunts };
