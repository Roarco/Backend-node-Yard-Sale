const joi = require('joi');

const id = joi.number().integer().min(1);
const name = joi.string().min(3).max(30)
const image = joi.string().uri()


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

// validamos los datos para un get
const getCategories = joi.object({
  id: id.required(),
})

module.exports = {
  getCategories,
  createCategory,
  updateCategory
}
