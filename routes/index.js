const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
  response.send('Hack4lem');
});

console.log("hack4lem console log")

router.get('/:campaign', (req, res) => {
  res.send('campaign: ' + req.params.campaign);
});

module.exports = router;
