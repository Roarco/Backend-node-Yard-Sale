const joi = require('joi');

const id = joi.number().integer();
const orderId = joi.number().integer();
const productId = joi.number().integer();
const amount = joi.number().integer().min(1);

const createOrderProduct = joi.object({
  orderId: orderId.required(),
  productId: productId.required(),
  amount: amount.required()
});

const getOrderProducts = joi.object({
  id: id.required()
});

module.exports = {
  createOrderProduct,
  getOrderProducts
}
