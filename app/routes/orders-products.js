
const express = require('express');
const router = express.Router();
const OrderProductService = require('../services/orders-products');
const validatorHandler = require('../middlewares/validator');
const passport = require('passport')
const { ckeckRoles } = require('../middlewares/auth');
const { getOrderProducts, createOrderProduct} = require('../schema/orders-products');

const services = new OrderProductService();

/* orders-products */

//GET
router.get('/:id',
passport.authenticate('jwt', { session: false }),
ckeckRoles('user', 'admin'),
validatorHandler(getOrderProducts, 'params'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const orderProduct = await services.getOrderProducts(id);
    res.json(orderProduct)
  }catch(err){
    next(err);
  }
})

// POST
router.post('/',
passport.authenticate('jwt', { session: false }),
ckeckRoles('user'),
validatorHandler(createOrderProduct, 'body'),
async (req, res, next) => {
  try {
    const body  = req.body;
    const orderProduct = await services.createOrderProduct(body);
    res.json(orderProduct)
  }catch(err){
    next(err);
  }
})

module.exports = router;
