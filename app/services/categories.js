
const faker = require('faker');

class CategoriesService {

  constructor () {
    this.categories = []
    this.generate();
  }

  generate() {
    for (let i = 0; i < 10; i++) {
      this.categories.push({
        id: faker.random.uuid(),
        name: faker.commerce.department(),
        description: faker.lorem.sentence()
      })
    }
  }

  find() {
    return this.categories;
  }

  findOne(id) {
    return this.categories.find(category => category.id === id);
  }
}

module.exports = CategoriesService;
