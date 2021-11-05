const boom = require('@hapi/boom');
class FilesService {
  constructor() {
    this.files = [];
  }

  async created (data) {
    const newFile = {
      ...data
    }
    this.files.push(newFile)
    return newFile
  }

  async find(name)  {
    return new Promise((resolve) => {
      const file = this.files.find(file => file.name === name)

      if (!file) {
        throw boom.notFound(`File ${name} not found`)
      }else{
        resolve(file)
      }
    },5000)
  }

}

module.exports = FilesService;
