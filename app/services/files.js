

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

  async find()  {
    return new Promise((resolve) => {
      resolve(this.files)
    },5000)
  }

}

module.exports = FilesService;
