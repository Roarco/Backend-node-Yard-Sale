

class FilesService {
  constructor() {
    this.files = [];
  }

  created (file) {
    this.files.push(file);
  }

  find()  {
    return this.files;
  }

}

module.exports = FilesService;
