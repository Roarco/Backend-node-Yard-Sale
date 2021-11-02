
const express = require('express');
const router = express.Router();

/* files */

//POST
router.post('/', (req, res) =>  {
  const body = req.body;
  res.json({
    body
  })
})

//GET
router.get('/:filename', (req, res) =>  {
  const { filename } = req.params;
  res.sendFile(`${__dirname}/files/${filename}`);
})

module.exports = router;
