const express = require('express');
const productsService = require('../services/products');
const validatorHandler = require('../middlewares/validator');
const passport = require('passport')
const { ckeckRoles } = require('../middlewares/auth');
const{ createProductSchema, updatedProductSchema, getProductSchema , queryProductSchema } = require('../schema/products');

const router = express.Router();
const service = new productsService();

/* products */

//GET

router.get('/',
  passport.authenticate('jwt', { session: false }),
  ckeckRoles('admin' , 'user'),
  validatorHandler(queryProductSchema, 'query'),
  async (req, res, next) =>  {
    try {
      const products = await service.find(req.query);
      res.json(products);
    } catch (error) {
      next(error);
    }
});

router.get('/:id',
  passport.authenticate('jwt', { session: false }),
  ckeckRoles( 'admin' , 'user'),
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) =>  {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
  }
    catch (err) {
      next(err); //se agrega el next para atrapar de forma explicita el error con el middleware
  }
})

//POST
router.post('/',
  passport.authenticate('jwt', { session: false }),
  ckeckRoles('admin' ),
  validatorHandler(createProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newProduct = await service.create(body);
      res.status(201).json(newProduct);
    } catch (err) {
      next(err);
    }
  });

// //PUT
// router.put('/:id', (req, res) =>  {
//   const { id } = req.params.id;
//   res.json({
//     id,
//     name: 'Producto 1',
//     price: '$100'
//   })
// })

//PATCH
router.patch('/update/:id',
  passport.authenticate('jwt', { session: false }),
  ckeckRoles('admin'),
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updatedProductSchema, 'body'),
  async (req, res, next) =>  {
    try {
      const { id } = req.params;
      const body = req.body;
      const updatedProduct = await service.update(id, body);
      res.json({
        message: 'Product updated',
        updatedProduct
      });
    } catch (error) {
      next(error);
    }
  })

//DELETE
router.delete('/delete/:id',
  passport.authenticate('jwt', { session: false }),
  ckeckRoles('admin'),
validatorHandler(getProductSchema, 'params'),
async (req, res, next) =>  {
  try {
    const { id } = req.params;
    const deletedProduct = await service.delete(id);
    res.json({
      message: 'Product deleted',
      deletedProduct
    });
  } catch (error) {
    next(error);
  }
})

module.exports = router;
