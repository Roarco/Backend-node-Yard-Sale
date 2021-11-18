const express = require('express');
const router = express.Router();
const authService = require('../services/auth');
const validatorHandler = require('../middlewares/validator');
const { createAuth } = require('../schema/auth')
const services = new authService();

/* auth */

//GET
router.get('/', async (req, res) =>  {
  const auth = await services.find();
  res.json(auth);
})

//POST
router.post('/',
  validatorHandler(createAuth, 'body'),
  async (req, res, next) =>  {
    try {
      const body = req.body;
      const token = await services.created(body);
      res.json({
      message: 'Auth created',
      token
    })
    } catch (error) {
      next(error);
    }
})

module.exports = router;
