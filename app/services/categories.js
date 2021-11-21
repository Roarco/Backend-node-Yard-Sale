

const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const productsService = require('./products');
const service = new productsService();

class CategoriesService {

  constructor () {
  }

    async create(data) {
      const response = await models.Category.create(data);
      return response;
    }

  async find() {
    const response = await models.Category.findAll();
    return response;
  }

  async findOne(id, query) {
    const products = await service.find(query);
    const productsCategory = products.filter(product => product.categoryId === id);
    const response = await models.Category.findOne({
      where: {
        id
      },
    });
      if (response === null) {
        throw boom.notFound('Categorie not found');
      }else {
        return productsCategory
      }
      // ...response.dataValues,

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
