const express = require('express')
const router = express.Router()

//test
router.get('/', (req, res) => {
    res.send('zzzzzz connected zzzzzz')
})

module.exports = router