
class authService{
  constructor() {
    this.auth = [];
  }

  created (token) {
    this.auth.push(token);
  }

  find()  {
    return this.auth;
  }
}

module.exports = authService;
