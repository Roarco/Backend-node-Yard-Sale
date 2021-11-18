

const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CategoriesService {

  constructor () {
    this.categories = []
  }

    async create(data) {
      const response = await models.Category.create(data);
      return response;
    }

  async find() {
    const response = await models.Category.findAll();
    return response;
  }

  async findOne(id) {
    const response = await models.Category.findOne({
      where: {
        id
      }
    });
      if (response === null) {
        throw boom.notFound('Categorie not found');
      }else {
        return response;
      }

  }
  async update(id, changes) {
    const response = await models.Category.update(changes, {
      where: {
        id
      }
    });
    if (response[0] === 0) {
      throw boom.notFound('Categorie not found');
    }else {
      return { id };
    }

  }

}

module.exports = CategoriesService;
