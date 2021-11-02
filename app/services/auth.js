
class authService{
  constructor() {
    this.auth = [];
  }

  created (data) {
   const newToken = {
        ...data
  }
  this.auth.push(newToken)
  return newToken
  }

  find()  {
    return this.auth;
  }
}

module.exports = authService;
