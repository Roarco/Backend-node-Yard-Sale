const joi = require('joi');

const token = joi.string().required();
const password = joi.string().min(6).max(20).required();
const confirmPassword = joi.string().min(6).max(20).required();
const email = joi.string().email();

//validando email para recuperar contraseña
const recoveryUser = joi.object({
  email: email.required(),
})

const changePassword = joi.object({
  token: token.required(),
  password: password.required(),
  confirmPassword: confirmPassword.required(),
})


module.exports = {
  recoveryUser,
  changePassword
}
