const joi = require('joi');

const id = joi.number().integer();
const name = joi.string().min(3).max(30);
const lastName = joi.string();
const phone = joi.string();
const userId = joi.number().integer();
const email = joi.string().email();
const password = joi.string();
const role = joi.string().valid('user');

const getCustomer = joi.object({
  id: id.required(),
});

const createdCustomer = joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  user: joi.object({
    email: email.required(),
    password: password.required(),
    role: role.required(),
  }),
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
