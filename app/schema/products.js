
const joi = require('joi');

const id = joi.number().integer();
const name = joi.string().min(3).max(30);
const price = joi.number().integer().min(10);
const description = joi.string().min(10).max(200);
const categoryId = joi.number().integer().min(1);
const image = joi.string();

const limit = joi.number().integer().min(1);
const offset = joi.number().integer().min(0);

const price_min = joi.number().integer().min(10);
const price_max = joi.number().integer().min(10);

// creamos el schema de productos para la creacion

const createProductSchema = joi.object({
    name: name.required(),
    price: price.required(),
    description: description.required(),
    categoryId: categoryId.required(),
    image: image.required()
})

// creamos el schema de productos para la actualizacion

const updatedProductSchema = joi.object({
    name: name,
    price: price,
    description: description,
    categoryId: categoryId,
    image: image
})

// validamos los datos para un get

const getProductSchema = joi.object({
    id: id.required()
})

// validamos los datos para una paginacion con limit y offset

const queryProductSchema = joi.object({
    limit: limit,
    offset: offset,
    price: price,
    price_min: price_min,
    price_max: price_max.when('price_min', {
      is: price_min.required(),
      then: joi.required(),
    })
})

module.exports = {
    createProductSchema,
    updatedProductSchema,
    getProductSchema,
    queryProductSchema
}


