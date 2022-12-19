const mongoose = require("mongoose");
const { Users } = require("./schemaModels/users");

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://localhost/treasure", { useNewUrlParser: true })
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

const seedDB = async () => {
  await Users.deleteMany({});
  await Users.insertMany(seedUsers);
};

seedDB().then(() => {
  mongoose.connection.close();
});
