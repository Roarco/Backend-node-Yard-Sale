

class FilesService {
  constructor() {
    this.files = [];
  }

  created (data) {
    const newFile = {
      ...data
    }
    this.files.push(newFile)
    return newFile
  }

  find()  {
    return this.files;
  }

}

module.exports = FilesService;
