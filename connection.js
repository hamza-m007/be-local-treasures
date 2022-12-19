const { mongoose } = require("mongoose");

mongoose.connect("mongodb://localhost/treasures");

mongoose.connection
  .open("open", () => {
    console.log("connection made");
  })
  .on((err) => {
    console.log(err);
  });
