
const express = require('express');
const router = express.Router();
const OrdersService = require('../services/orders');
const passport = require('passport')


const services = new OrdersService();

/* Profile */

//GET
router.get('/my-orders',
  passport.authenticate('jwt', { session: false }),
async (req, res, next) =>  {
  try {
    const user = req.user;
    const orders = await services.findByUser(user.sub);
    res.json(orders);
  } catch (error) {
    next(error);
  }
})

module.exports = router;
