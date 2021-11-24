
const { Strategy } = require('passport-local');
const boom = require('@hapi/boom');
const bcryptjs = require('bcryptjs');

const UsersService = require('../../../services/users');
const services = new UsersService();

const localStrategy = new Strategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  async (username, password, done) => {
    try{
      const user = await services.findByEmail(username);
      if(!user){
        return done(boom.unauthorized(), false);
      }
      const isPasswordValid = await bcryptjs.compare(password, user.password);
      if(!isPasswordValid){
        return done(boom.unauthorized(), false);
      }
      delete user.dataValues.password;
      return done(null, user);
    }catch(err){
      done(err);
    }
});

module.exports = localStrategy;
