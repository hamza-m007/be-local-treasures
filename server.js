const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/treasures')

app.listen(3000, () => console.log('Server Started'))