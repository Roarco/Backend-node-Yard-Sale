const joi = require('joi');

const id = joi.string().uuid();
const name = joi.string().min(3).max(30);
const email = joi.string().email();
const password = joi.string().min(6).max(30);

// creamos el schema de usuarios para la creacion

const createdUser = joi.object({
  name: name.required(),
  email: email.required(),
  password: password.required(),
})

// creamos el schema de usuarios para la actualizacion

const updatedUser = joi.object({
  name: name,
  email: email,
  password: password,
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
