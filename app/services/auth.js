
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
  delete user.dataValues.recoveryToken;
  return {
    user,
    token,
  }
  }

async sendRecovery(email){
  const user = await services.findByEmail(email);
      if(!user){
        throw boom.unauthorized();
      }
  const payload = {
    sub: user.dataValues.id,
  }
  const token = jwt.sign(payload, config.jwtSecret, {expiresIn: '15min'});
  const link = `https://yardsales.netlify.app/password-recovery?token=${token}`;
  await services.update(user.id, {recoveryToken: token});
  const mail = {
      from: config.smtpEmail, // sender address
      to: `${user.email}`, // list of receivers
      subject: "Recupera tu contraseña de Yard sale", // Subject line
      html: `<b>Ingresa a este link para recuperar tu contraseña:${link}</b>`, // html body
  }
  const response = await this.sendMail(mail);
  return response;
}

  async changePassword(token,password,confirmPassword){

      if(password !== confirmPassword){
        throw {message: 'Las contraseñas no coinciden'};
      }
      const payload = jwt.verify(token, config.jwtSecret);
      const user = await services.findOne(payload.sub);
      if(user.recoveryToken !== token){
        throw boom.unauthorized();
      }
      const hashedPassword = await bcryptjs.hash(password, 10);
      await services.update(user.id, {password: hashedPassword, recoveryToken: null});
      return {message: 'Contraseña cambiada'};

  }

  async sendMail(infoMail){
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      secure: true,
      port: 465,
      auth: {
          user: config.smtpEmail,
          pass: config.smtpPassword
      }
    });

    // send mail with defined transport object
    await transporter.sendMail(infoMail);
    return {message: 'correo enviado'}
  }
}

module.exports = authService;
