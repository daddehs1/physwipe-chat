const express = require('express');
const router = express.Router()

router.use('/token', require('./routes/token'));

module.exports = router;
