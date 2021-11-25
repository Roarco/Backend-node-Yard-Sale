
const express = require('express');
const router = express.Router();
const OrdersService = require('../services/orders');
const validatorHandler = require('../middlewares/validator');
const passport = require('passport')
const { ckeckRoles } = require('../middlewares/auth');
const { getOders} = require('../schema/orders')

const services = new OrdersService();

/* orders */

//GET
router.get('/:id',
  passport.authenticate('jwt', { session: false }),
  ckeckRoles('user', 'admin'),
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
  //ckeckRoles('user'),
  //validatorHandler(createOrder, 'body'),
  async (req, res, next) =>  {
    try {
      const body = {
        customerId: req.user.sub,
      }
      const order = await services.createOrder(body);
      res.json(order)
    } catch (error) {
      next(error);
    }
})

module.exports = router;
