const faker = require('faker');
class authService{
  constructor() {
    this.auth = [];
  }

  async created (data) {
  const newToken = {
      id: faker.random.uuid(),
        data
  }
  this.auth.push(newToken)
  return newToken
  }

  async find()  {
    return new Promise((resolve) => {
      resolve(this.auth)
    },6000);
  }
}

module.exports = authService;
