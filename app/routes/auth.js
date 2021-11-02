const express = require('express');
const router = express.Router();

/* auth */

//GET
router.get('/', (req, res) =>  {
  res.json({
    token: '123456'
  })
})

//POST
router.post('/login', (req, res) =>  {
  res.json({
    token: '123456'
  })
})

module.exports = router;
