require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json())

const huntsRouter = require('./routes/hunts')
app.use('/api/hunts', huntsRouter)

app.listen(7676, () => console.log("Server Started"));
