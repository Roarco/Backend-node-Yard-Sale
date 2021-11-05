
const joi = require('joi');

const id = joi.string().uuid();
const name = joi.string().min(3).max(30);
const price = joi.number().integer().min(10);
const description = joi.string().min(10).max(200);
const categorieId = joi.number().integer().min(1);
const image = joi.array().items(joi.string().uri());

// creamos el schema de productos para la creacion

const createProductSchema = joi.object({
    name: name.required(),
    price: price.required(),
    description: description.required(),
    categorieId: categorieId.required(),
    image: image.required()
})

// creamos el schema de productos para la actualizacion

const updatedProductSchema = joi.object({
    name: name,
    price: price,
    description: description,
    categorieId: categorieId,
    image: image
})

// validamos los datos para un get

const getProductSchema = joi.object({
    id: id.required()
})

module.exports = {
    createProductSchema,
    updatedProductSchema,
    getProductSchema,
}


