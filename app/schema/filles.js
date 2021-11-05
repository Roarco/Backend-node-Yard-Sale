const joi = require('joi');

const name = joi.string().required();
const file = joi.string().required();
const description = joi.string().min(30).max(50).required();

const createFille = joi.object({
  name: name.required(),
  file: file.required(),
  description: description.required()
})

const findFile = joi.object({
  name: name.required()
})

module.exports = {
    createFille,
    findFile
}
