const express = require('express');
const router = express.Router();
const passport = require('passport');
// const jwt = require('jsonwebtoken');
// const config = require('../config/config');
const validatorHandler = require('../middlewares/validator');
const { recoveryUser, changePassword} = require('../schema/auth');
const authService = require('../services/auth');
const services = new authService();

//POST
router.post('/login',
  passport.authenticate('local', { session: false }),
    async (req, res, next) =>  {
      try {
      const user = req.user;
      res.json(services.signToken(user));
      } catch (error) {
        next(error);
      }
})

router.post('/recovery',
  validatorHandler(recoveryUser, 'body'),
    async (req, res, next) =>  {
      try {
        const { email } = req.body;
        const response = await services.sendRecovery(email);
        res.json(response);
      } catch (error) {
        next(error);
      }
})

router.post('/change-password',
  validatorHandler(changePassword, 'body'),
    async (req, res, next) =>  {
      try {
        const {token, password,confirmPassword} = req.body;
        const response = await services.changePassword(token,password, confirmPassword);
        res.json(response);
      } catch (error) {
        next(error);
      }
})



module.exports = router;
