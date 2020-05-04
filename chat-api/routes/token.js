var express = require('express');
var router = express.Router();
var TokenService = require('../services/tokenService');

// POST /token
router.post('/', (req, res) => {
  let deviceId = req.body.device;
  let token = TokenService.generate(deviceId)

  res.json({identity: token.identity, token: token.toJwt()});
});

module.exports = router;
