const joi = require('joi');

const id = joi.number().integer();
const name = joi.string().min(3).max(30);
const lastName = joi.string();
const phone = joi.string();
const userId = joi.number().integer();
// const email = joi.string().email();
// const password = joi.string();

const getCustomer = joi.object({
  id: id.required(),
});

const createdCustomer = joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  userId: userId.required(),
});

const updatedCustomer = joi.object({
  name,
  lastName,
  phone,
  userId,
});

module.exports = {
  getCustomer,
  createdCustomer,
  updatedCustomer,
};
