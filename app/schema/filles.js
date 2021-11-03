const joi = require('joi');

const name = joi.string().min(3).max(20).required();
const url = joi.string().min(3).max(20).required();
const description = joi.string().min(30).max(50).required();

const createFille = joi.object({
    name: name.required(),
    url: url.required(),
    description: description.required()
})

module.exports = {
    createFille
}
