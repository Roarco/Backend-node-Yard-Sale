const joi = require('joi');

const id = joi.number().integer();
const customerId = joi.number().integer();

const getOders = joi.object({
  id: id.required()
});
const createOrder = joi.object({
  customerId: customerId.required()
});

module.exports = {
  getOders,
  createOrder
};
