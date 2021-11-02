// requerimos fake
const faker = require('faker');

// creamos la clase ProductsService
class ProductsService {

  //constructor

  constructor() {
    this.products = [];
    this.generate(); // Iniciamos nuestro servicio de usuarios
  }

  generate() { // generamos los usuarios
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.random.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(),10),
        image: faker.image.image()
    });
  }
  }

  //funciones para los servicios

  create(){

  }

  find()  {
    // devolvemos todos los usuarios
    return this.products;
  }

  findOne(id) {
    // devolvemos un usuario
    return this.products.find(product => product.id === id);

  }

  update() {

  }

  delete() {

  }
}

module.exports = ProductsService;
