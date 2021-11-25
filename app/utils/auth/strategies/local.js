
const { Strategy } = require('passport-local');
const authService = require('../../../services/auth');
const services = new authService();

const localStrategy = new Strategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  async (email, password, done) => {
    try{
      const user = await services.getUser(email, password);
      return done(null, user);
    }catch(err){
      done(err);
    }
});

module.exports = localStrategy;
