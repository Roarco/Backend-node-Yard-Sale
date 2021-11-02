const express = require('express');
const router = express.Router();
const UsersService = require('../services/users');

const services = new UsersService();

/* users */

//GET
router.get('/', (req, res) =>  {
  const users = services.find();
  res.json(users);
})

//POST
router.post('/', (req, res) =>  {
  const body = req.body;
  services.createUser(body);
  res.json({
    message: 'User created'
  });
})

module.exports = router;
