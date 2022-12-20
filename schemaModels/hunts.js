const { mongoose, Schema } = require("mongoose");

const latlongSchema = new Schema({
  lat: Number,
  long: Number,
});

const checkpointSchema = new Schema({
  1: latlongSchema,
  2: latlongSchema,
  3: latlongSchema,
  4: latlongSchema,
  5: latlongSchema,
  6: latlongSchema,
});

const huntSchema = new Schema({
  title: String,
  location: String,
  checkpoints: Object,
  distance: Number,
});

const Hunts = mongoose.model("hunts", huntSchema);

module.exports =  Hunts ;

/*
 
{
  title: Hunt Demo,
  location: Leeds,
  checkpoints: {
    1: {
      lat: 00000000,
      long: 00000000,
    },
   2 : {
      lat: 1111111111,
      long: 11111111111,
    }
    3 : {
      lat: 222222222,
      long: 222222222,
    },
    distance: 3
  }
}
 
 */
