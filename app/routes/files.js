
const express = require('express');
const router = express.Router();
const FilesService = require('../services/files');

const services = new FilesService();
/* files */

//POST
router.post('/', (req, res) =>  {
  const body = req.body;
  const file = services.created(body)
  res.json({
    message: 'File created successfully',
    file
  })
})

//GET
router.get('/', (req, res) =>  {
  const file = services.find();
  res.json(file);
})

module.exports = router;
