const express = require('express');
const productsService = require('../services/products');

const router = express.Router();
const service = new productsService();

/* products */

//GET

router.get('/', async (req, res) =>  {
  const products = await service.find();
  res.json(products);
});

router.get('/:id', async (req, res) =>  {
  const { id } = req.params;
  const product = await service.findOne(id);
  res.json(product);
})

//POST
router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
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
router.patch('/:id', async (req, res) =>  {
  try {
    const { id } = req.params;
    const body = req.body;
    const updatedProduct = await service.update(id, body);
    res.json(updatedProduct);
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})

//DELETE
router.delete('/:id', async (req, res) =>  {
  const { id } = req.params;
  const deletedProduct = await service.delete(id);
  res.json(deletedProduct);
})

module.exports = router;
