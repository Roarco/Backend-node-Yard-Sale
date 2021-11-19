const joi = require('joi');

const id = joi.string();
const email = joi.string().email();
const password = joi.string().min(6).max(30);
const role = joi.string().valid('admin', 'user');

// creamos el schema de usuarios para la creacion

const createdUser = joi.object({
  email: email.required(),
  password: password.required(),
  role: role.required(),
})

// creamos el schema de usuarios para la actualizacion

const updatedUser = joi.object({
  email: email,
  password: password,
  role: role,
})

// validamos los datos para un get

const getUser = joi.object({
  id: id.required(),
})

module.exports = {
  createdUser,
  updatedUser,
  getUser,
}
