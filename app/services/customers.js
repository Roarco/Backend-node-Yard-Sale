
const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CustomersService {
  constructor() {
  }

  async find() {
    const response = await models.Customer.findAll({
      include: ['user']
    });
    return response;
  }

  async create(data) {
    const response = await models.Customer.create(data,{
      include: ['user']
    });
    delete response.dataValues.user.dataValues.password;
    return response;
  }

  async update(id, changes) {
    const response = await models.Customer.update(changes, {
      where: {
        id
      }
    });
    if (response[0] === 0) {
      throw boom.notFound('Customer not found');
    }
    return response;
  }

  async delete(id) {
    const response = await models.Customer.destroy({
      where: {
        id
      }
    });
    if (response === 0) {
      throw boom.notFound('Customer not found');
    }
    return response;
  }
}

module.exports = CustomersService;
