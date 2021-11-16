const boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool');
class FilesService {
  constructor() {
    this.pool = pool
    this.pool.on('error', (err) => {
      console.error(err)
    })
  }

  async created (data) {
    const query = `INSERT INTO files (name, file, description) VALUES ($1, $2, $3) RETURNING *`
    const values = [data.name, data.file, data.description]
    const result = await this.pool.query(query, values)
    return result.rows[0]
  }

  async find(name)  {
    const query = `SELECT * FROM files WHERE name = $1`
    const values = [name]
    const result = await this.pool.query(query, values)

      if (result.rowCount === 0) {
        throw boom.notFound(`File ${name} not found`)
      }else{
        return result.rows[0]
      }

  }

}

module.exports = FilesService;
