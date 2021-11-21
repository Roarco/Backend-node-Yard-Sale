const joi = require('joi');

const id = joi.number().integer().min(1);
const name = joi.string().min(3).max(30)
const image = joi.string().uri()

const limit = joi.number().integer().min(1);
const offset = joi.number().integer().min(0);

// creamos el schema de usuarios para la creacion
const createCategory = joi.object ({
    name: name.required(),
    image: image.required()
})

//creamos el schema de usuarios para la actualizacion
const updateCategory = joi.object ({
    name: name,
    image: image
})

// validamos los datos para un get y una paginacion con limit y offset
const getCategories = joi.object({
  id: id.required(),
})

// validamos los datos para una paginacion con limit y offset

const querySchema = joi.object({
  limit: limit,
  offset: offset
})


module.exports = {
  getCategories,
  createCategory,
  updateCategory,
  querySchema
}
