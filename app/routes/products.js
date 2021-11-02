const express = require('express');
const productsService = require('../services/products');

const router = express.Router();
const service = new productsService();

/* products */

//GET

router.get('/', (req, res) =>  {
  const products = service.find();
  res.json(products);
});

router.get('/:id', (req, res) =>  {
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product);
})

//POST
router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    body,
  });
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
router.patch('/:id', (req, res) =>  {
  const { id } = req.params;
  const body = req.body;
  res.json({
    body,
    id,
  })
})

//DELETE
router.delete('/:id', (req, res) =>  {
  const { id } = req.params;
  res.json({
    id,
  })
})

module.exports = router;
