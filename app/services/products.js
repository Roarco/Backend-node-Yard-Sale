// requerimos fake
//const faker = require('faker');
const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

// creamos la clase ProductsService
class ProductsService {

  //constructor

  constructor() {
    this.products = [];
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

  async find()  {
    // devolvemos todos los usuarios
    const response = await models.Product.findAll();
    return response;
  }

  async findOne(id) {
    // devolvemos un producto
    const product = this.products.find(product => product.id === id);
    if (!product) {
      throw boom.notFound('Product not found');
    }if (product.isBlocked) {
      throw boom.conflict('Product is blocked');
    }else {
      return product;
    }
  }

  async update(id, changes) {
    const index = this.products.findIndex(product => product.id === id);

    if (index === -1) {
      throw boom.notFound('Product not found');
    }else {
      const product = this.products[index];
      this.products[index] = {
        ...product,
        ...changes
      };
      return this.products[index];
    }

  }

  async delete(id) {
    const index = this.products.findIndex(product => product.id === id);

    if (index === -1) {
      throw boom.notFound('Product not found');
    }else {
      this.products.splice(index, 1);
      return  { id };
    }

  }
}

module.exports = ProductsService;
