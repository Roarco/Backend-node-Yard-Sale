
// const pool = require('../libs/postgres.pool');
const { models } = require('../libs/sequelize');
class authService{
  constructor() {
    // this.pool = pool;
    // this.pool.on('connect', () => {
    //   console.log('connected to the db');
    // })

  }

  async created (data) {
    const response = await models.Auth.create(data);
    return response;
  }

  async find()  {
    const response = await models.Auth.findAll();
    return response;
  }
}

module.exports = authService;
