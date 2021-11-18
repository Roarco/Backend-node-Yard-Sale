const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class FilesService {
  constructor() {
  }

  async created (data) {
    // const query = `INSERT INTO files (name, file, description) VALUES ($1, $2, $3) RETURNING *`
    // const values = [data.name, data.file, data.description]
    // const result = await this.pool.query(query, values)
    // return result.rows[0]
  }

  async find(name)  {
    const response = await models.File.findOne({
      where: {
        name
      }
    })
      if (!response) {
        throw boom.notFound(`File ${name} not found`)
      }else{
        return response
      }

  }

}

module.exports = FilesService;
