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
  const user = services.createUser(body);
  res.json({
    message: 'User created',
    user
  });
})

//PATCH
router.patch('/:id', (req, res) =>  {
  const { id } = req.params;
  const body = req.body;
  const updateUser = services.update(id, body);
  res.json({
    message: 'User updated',
    updateUser
  });
})

//DELETE
router.delete('/:id', (req, res) =>  {
  const { id } = req.params;
  const deletedUser = services.delete(id);
  res.json({
    message: 'User deleted',
    deletedUser
  });
})

module.exports = router;
