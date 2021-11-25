const joi = require('joi');

const token = joi.number().integer().required();
const email = joi.string().email();

const createAuth = joi.object({
  token: token.required()
})

//validando email para recuperar contraseña
const recoveryUser = joi.object({
  email: email.required(),
})

module.exports = {
  createAuth,
  recoveryUser,
}
