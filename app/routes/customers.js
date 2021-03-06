const express = require('express');
const router = express.Router();
const CustomersService = require('../services/customers');
const validatorHandler = require('../middlewares/validator');
const passport = require('passport')
const { ckeckRoles } = require('../middlewares/auth');

const { getCustomer, createdCustomer, updatedCustomer} = require('../schema/customers')

const services = new CustomersService();

/* customers */

//GET
router.get('/',
  passport.authenticate('jwt', { session: false }),
  ckeckRoles('admin' ),
async (req, res) =>  {
  const customers = await services.find();
  res.json(customers);
})

//POST
router.post('/',
validatorHandler(createdCustomer, 'body'),
  async (req, res, next) =>  {
    try {
    const body = req.body;
    const customer = await services.create(body);
    res.json(customer);
    } catch (err) {
      next(err);
    }
  }
)

//PATCH
router.patch('/:id',
  passport.authenticate('jwt', { session: false }),
  ckeckRoles( 'admin' , 'user'),
  validatorHandler(updatedCustomer, 'body'),
    async (req, res, next) =>  {
      try {
      const { id } = req.params;
      const body = req.body;
      const customer = await services.update(id, body);
      res.json({
        message: 'Customer updated',
        customer
      });
      } catch (err) {
        next(err);
      }
    }
)

//DELETE
router.delete('/:id',
  passport.authenticate('jwt', { session: false }),
  ckeckRoles( 'admin', 'user'),
  validatorHandler(getCustomer, 'params'),
  async (req, res, next) =>  {
    try {
    const { id } = req.params;
    const customer = await services.delete(id);
    res.json({
      message: 'Customer deleted',
      customer
    });
    } catch (err) {
      next(err);
    }
  }
)

module.exports = router;

