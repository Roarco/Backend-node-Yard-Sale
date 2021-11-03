
const express = require('express');
const router = express.Router();
const FilesService = require('../services/files');
const validatorHandler = require('../middlewares/validator');
const { createFille } = require('../schema/filles');
const services = new FilesService();
/* files */

//POST
router.post('/',
  validatorHandler(createFille, 'body'),
  async (req, res) =>  {
    const body = req.body;
    const file = await services.created(body)
    res.json({
      message: 'File created successfully',
      file
    })
})

//GET
router.get('/', async (req, res) =>  {
  const file = await services.find();
  res.json(file);
})

module.exports = router;
