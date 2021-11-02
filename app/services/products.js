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

  async create(data){
    const newProduct = {
      id: faker.random.uuid(),
      ...data
    };
    this.products.push(newProduct);
    return newProduct;
  }

  async find()  {
    // devolvemos todos los usuarios
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.products);
      }, 5000);
    })
  }

  async findOne(id) {
    //const name = this.getTotal();
    // devolvemos un usuario
    return this.products.find(product => product.id === id);

  }

  async update(id, changes) {
    const index = this.products.findIndex(product => product.id === id);

    if (index === -1) {
      throw new Error('Product not found');
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
      throw new Error('Product not found');
    }else {
      this.products.splice(index, 1);
      return  { id };
    }

  }
}

module.exports = ProductsService;
