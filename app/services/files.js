const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class FilesService {
  constructor() {
  }

  async created (data) {
    const response = await models.File.create(data)
    return response
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
