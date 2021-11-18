const express = require('express');
const router = express.Router();
const UsersService = require('../services/users');
const validatorHandler = require('../middlewares/validator');
const { createdUser, updatedUser, getUser} = require('../schema/users')

const services = new UsersService();

/* users */

//GET
router.get('/', async (req, res) =>  {
  const users = await services.find();
  res.json(users);
})

//POST
router.post('/',
validatorHandler(createdUser, 'body'),
  async (req, res, next) =>  {
    try {
    const body = req.body;
    const user = await services.createUser(body);
    res.json({
    message: 'User created',
    user
  });
    } catch (err) {
      next(err);
    }
})

//PATCH
router.patch('/:id',
  validatorHandler(getUser, 'params'),
  validatorHandler(updatedUser, 'body'),
  async (req, res, next) =>  {
  try {
    const { id } = req.params;
    const body = req.body;
    const updateUser = await services.update(id, body);
    res.json({
      message: 'User updated',
      updateUser
    });
  } catch (error) {
    next(error);
  }
})

//DELETE
router.delete('/:id', async(req, res, next) =>  {
  try {
    const { id } = req.params;
    const deletedUser = await services.delete(id);
    res.json({
    message: 'User deleted',
    deletedUser
  });
  }catch (error) {
    next(error);
  }
})

module.exports = router;
