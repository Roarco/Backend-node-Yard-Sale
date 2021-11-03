const joi = require('joi');

const id = joi.string().uuid();

// validamos los datos para un get
const getCategories = joi.object({
  id: id.required(),
})

module.exports = {
  getCategories
}
