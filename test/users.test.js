const { mongoose } = require("mongoose");
const assert = require("assert");
const {  after, beforeEach } = require("mocha");
const seedDB = require("../seed");
const Users = require("../schemaModels/users");

beforeEach(() => {
  console.log('user testing start')
  seedDB();
});


describe("user test", () => {
  const newUser = new Users({
    username: "username",
    firstname: "firstname",
    lastname: "lastname",
    age: 34,
  });
  it("new user", (done) => {
    newUser.save().then(() => {
      assert(newUser.isNew === false);
    });
    done();
  });
});

after(()=> {
  console.log('user testing stop')
  mongoose.connection.close()
})