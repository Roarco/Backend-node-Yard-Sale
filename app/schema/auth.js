const joi = require('joi');

const token = joi.number().integer().required();

const createAuth = joi.object({
  token: token.required()
})

module.exports = {
  createAuth
}
