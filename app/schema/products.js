
const joi = require('joi');

const id = joi.string().uuid();
const name = joi.string().min(3).max(15);
const price = joi.number().integer().min(10);
const image = joi.string().uri();

// creamos el schema de productos para la creacion

const createProductSchema = joi.object({
    name: name.required(),
    price: price.required(),
    image: image.required()
})

// creamos el schema de productos para la actualizacion

const updatedProductSchema = joi.object({
    name: name,
    price: price,
    image: image
})

// validamos los datos para un get

const getProductSchema = joi.object({
    id: id.required()
})

module.exports = {
    createProductSchema,
    updatedProductSchema,
    getProductSchema
}


