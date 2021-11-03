
const boom  = require('boom');

// creamos middleware para manejar validar los datos

const validatorHandler = (schema, property) => {

  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data);

    if (error) {
      next(boom.badRequest(error));
    }else {
      next();
    }
  }
}

module.exports = validatorHandler;
