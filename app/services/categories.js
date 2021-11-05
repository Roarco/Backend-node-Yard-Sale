

const boom = require('@hapi/boom');

class CategoriesService {

  constructor () {
    this.categories = []
    this.generate();
  }

  generate() {
    const nameCategory = ['Clothes', 'Electronics', 'Furniture', 'Toys', 'Other'];
    const images =['https://placeimg.com/640/480/any?r=0.1967836839565258','https://placeimg.com/640/480/any?r=0.3016731846645835','https://placeimg.com/640/480/any?r=0.2503021058108579','https://placeimg.com/640/480/any?r=0.6894861150860241','https://placeimg.com/640/480/any?r=0.9901806180967545']
    for (let i = 0; i < 5; i++) {
      this.categories.push({
        id: i + 1,
        name: nameCategory[i],
        image: images[i]
      })
    }
  }

    async create(data) {
      const newCategory = {
        id: this.categories.length + 1,
        ...data
    };
    this.categories.push(newCategory);
    return newCategory;
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
  async update(id, changes) {

    const index = this.categories.findIndex(category => category.id === id);

    if (index === -1) {
      throw boom.notFound('Categorie not found');
    }else {
      const category = this.categories[index];
      this.categories[index] = {
        ...category,
        ...changes
      };
      return this.categories[index];
    }

  }

}

module.exports = CategoriesService;
