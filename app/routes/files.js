
const express = require('express');
const router = express.Router();
const FilesService = require('../services/files');
const validatorHandler = require('../middlewares/validator');
const { createFille, findFile } = require('../schema/filles');
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
router.get('/:name',
 validatorHandler(findFile, 'params'),
  async (req, res, next) =>  {
  try {
  const { name } = req.params;
  const file = await services.find(name);
  res.json(file);
  } catch (error) {
    next(error);
  }
})

module.exports = router;
