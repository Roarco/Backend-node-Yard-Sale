
const express = require('express');
const router = express.Router();

/* files */

//POST
router.post('/upload', (req, res) =>  {
  res.json({
    id: 1,
    name: 'File 1',
    url: 'http://example.com/file1.jpg'
  })
})

//GET
router.get('/:filename', (req, res) =>  {
  const { filename } = req.params;
  res.sendFile(`${__dirname}/files/${filename}`);
})

module.exports = router;
