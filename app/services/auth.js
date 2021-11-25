
const UsersService = require('./users');
const services = new UsersService();
const boom = require('@hapi/boom');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const nodemailer = require('nodemailer');

class authService{
  constructor() {
  }

  async getUser(email, password) {
    const user = await services.findByEmail(email);
      if(!user){
        throw boom.unauthorized();
      }
      const isPasswordValid = await bcryptjs.compare(password, user.password);
      if(!isPasswordValid){
        throw boom.unauthorized();
      }
      delete user.dataValues.password;
      return user;
  }


  signToken(user){
    const payload = {
      sub: user.id,
      role: user.role,
    }
  const token = jwt.sign(payload, config.jwtSecret);
  return {
    user,
    token,
  }
  }

  async sendMail(email){
    const user = await services.findByEmail(email);
      if(!user){
        throw boom.unauthorized();
      }
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      secure: true,
      port: 465,
      auth: {
          user: 'sebuscaroberh@gmail.com',
          pass: 'rjbfgvdakyivmtxu'
      }
    });

    // send mail with defined transport object
    await transporter.sendMail({
      from: 'sebuscaroberh@gmail.com', // sender address
      to: `${user.email}`, // list of receivers
      subject: "este correo se envio desde node js ✔", // Subject line
      text: "Dios es poderoso?", // plain text body
      html: "<b>Dios es poderoso?</b>", // html body
    });

    return {message: 'correo enviado'}
  }
}

module.exports = authService;
