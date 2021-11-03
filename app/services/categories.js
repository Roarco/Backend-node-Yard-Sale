
const faker = require('faker');
const boom = require('@hapi/boom');

class CategoriesService {

  constructor () {
    this.categories = []
    this.generate();
  }

  generate() {
    for (let i = 0; i < 3; i++) {
      this.categories.push({
        id: faker.random.uuid(),
        name: faker.commerce.department(),
        description: faker.lorem.sentence()
      })
    }
  }

  async find() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.categories);
      }, 3000);
    });
  }

  async findOne(id) {
     const categorie = this.categories.find(category => category.id === id);

      if (!categorie) {
        throw boom.notFound('Categorie not found');
      }else {
        return categorie;
      }
  }
}

module.exports = CategoriesService;
