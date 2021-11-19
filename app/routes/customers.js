const express = require('express');
const router = express.Router();
const CustomersService = require('../services/customers');
const validatorHandler = require('../middlewares/validator');

const { getCustomer, createdCustomer, updatedCustomer} = require('../schema/customers')

const services = new CustomersService();

/* customers */

//GET
router.get('/', async (req, res) =>  {
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
validatorHandler(updatedCustomer, 'body'),
  async (req, res, next) =>  {
    try {
    const id = req.params;
    const body = req.body;
    const customer = await services.update(id, body);
    res.json(customer);
    } catch (err) {
      next(err);
    }
  }
)

//DELETE
router.delete('/:id',
  validatorHandler(getCustomer, 'params'),
  async (req, res, next) =>  {
    try {
    const id = req.params;
    const customer = await services.delete(id);
    res.json(customer);
    } catch (err) {
      next(err);
    }
  }
)

module.exports = router;

