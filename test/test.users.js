const { mongoose } = require("mongoose");
const assert = require("assert");
const { beforeAll, before, after, beforeEach } = require("mocha");
const seedDB = require("../seed");
const { doesNotMatch } = require("assert");
const Users = require("../schemaModels/users");

beforeEach(() => {
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
