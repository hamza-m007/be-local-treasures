const mongoose = require("mongoose");
const { Hunts } = require("./schemaModels/hunts");
const { Users } = require("./schemaModels/users");

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://localhost/treasures", { useNewUrlParser: true })
  .then(() => {
    console.log("connection open");
  })
  .catch((err) => {
    console.log(err);
  });

const seedUsers = [
  {
    username: "Testing",
    firstname: "Erin",
    lastname: "Rose",
    age: 20,
  },
  {
    username: "Testing2",
    firstname: "Ella",
    lastname: "Kazeem",
    age: 29,
  },
];

const seedHunts = [
  {
    title: "Hunt Demo",
    location: "Leeds",
    checkpoints: {
      1: {
        lat: 53.77568,
        long: -1.55998,
      },
      2: {
        lat: 53.800755,
        long: -1.549077,
      },
      3: {
        lat: 53.796638,
        long: -1.5926,
      },
      distance: 3,
    },
  },
];

const seedDB = async () => {
  await Users.deleteMany({});
  await Users.insertMany(seedUsers);
  await Hunts.deleteMany({});
  await Hunts.insertMany(seedHunts);
};

seedDB().then(() => {
  mongoose.connection.close();
});

module.exports = seedDB;
