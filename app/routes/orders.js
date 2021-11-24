
const express = require('express');
const router = express.Router();
const OrdersService = require('../services/orders');
const validatorHandler = require('../middlewares/validator');
const passport = require('passport')
const { getOders, createOrder} = require('../schema/orders')

const services = new OrdersService();

/* orders */

//GET
router.get('/:id',
  validatorHandler(getOders, 'params'),
async (req, res, next) =>  {
  try {
    const { id } = req.params;
    const order = await services.findById(id);
    res.json(order)
  } catch (error) {
    next(error);
  }
})

//POST
router.post('/',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(createOrder, 'body'),
  async (req, res, next) =>  {
    try {
      const body = req.body;
      const order = await services.createOrder(body);
      res.json(order)
    } catch (error) {
      next(error);
    }
})

module.exports = router;
