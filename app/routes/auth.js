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
router.post('/', (req, res) =>  {
  const body = req.body;
  res.json({
    body
  })
})

module.exports = router;
