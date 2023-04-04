const express = require('express');

const router = express.Router();

// create a new file
router.get('/', (req, res) => {
  let timestamp = new Date();
  res.json({ timestamp });
});

// post a new file
router.post('/', (req, res) => {
  let timestamp = new Date();
  res.json({ timestamp });
});

module.exports = router;
