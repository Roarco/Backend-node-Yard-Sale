// requerimos fake
//const faker = require('faker');
const boom = require('@hapi/boom');
const { Op } = require ('sequelize')
const { models } = require('../libs/sequelize');

// creamos la clase ProductsService
class ProductsService {

  //constructor

  constructor() {
    // this.generate(); // Iniciamos nuestro servicio de usuarios
  }

  // generate() { // generamos los usuarios
  //   const limit = 100;
  //   for (let i = 0; i < limit; i++) {
  //     this.products.push({
  //       id: faker.random.uuid(),
  //       name: faker.commerce.productName(),
  //       price: parseInt(faker.commerce.price(),10),
  //       description: faker.lorem.sentence(),
  //       categoryId: faker.random.uuid(),
  //       image: faker.image.image(),
  //       isBlocked: faker.random.boolean()
  //   });
  // }
  // }

  //funciones para los servicios

  async create(data){
    const response = await models.Product.create(data);
    return response;
  }

  async find(query) {
    // devolvemos todos los usuarios
    const options =  {
      include: ['category'],
      where: {}
    }
    const { limit, offset } = query;
    if(limit && offset){
      options.limit = limit;
      options.offset = offset;
    }
    const {price} = query;
    if(price){
      options.where.price = price;
    }
    const { price_min, price_max } = query;

    if(price_min && price_max){
      options.where.price = {
        [Op.gte]: price_min,
        [Op.lte]: price_max
      }
    }
    const products = await models.Product.findAll(options);
    return products;
  }

  async findOne(id) {
    // devolvemos un producto
    const response = await models.Product.findOne({
      where: {
        id
      }
    });
    if (!response) {
      throw boom.notFound('Product not found');
    // }if (product.isBlocked) {
    //   throw boom.conflict('Product is blocked');
    }else {
      return response;
    }
  }

  async update(id, changes) {
    const response = await models.Product.update(changes, {
      where: {
        id
      }
    });

    if (response[0] === 0) {
      throw boom.notFound('Product not found');
    }else {
      return { id };
    }

  }

  async delete(id) {
    const response = await this.findOne(id);
    await response.destroy();
    return { id };
  }
}

module.exports = ProductsService;
