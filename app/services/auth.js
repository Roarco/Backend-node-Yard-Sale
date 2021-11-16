
const pool = require('../libs/postgres.pool');
class authService{
  constructor() {
    this.pool = pool;
    this.pool.on('connect', () => {
      console.log('connected to the db');
    })

  }

  async created (data) {
    const query =   `INSERT INTO users (token) VALUES ($1) RETURNING *`;
    const values = [data.token];
    return new Promise((resolve, reject) => {
      this.pool.query(query, values, (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      });
    });
  }

  async find()  {
    const query =   `SELECT * FROM users`;
    return new Promise((resolve, reject) => {
      this.pool.query(query, (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      });
    });
  }
}

module.exports = authService;
