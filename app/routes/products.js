const express = require('express');
const faker = require('faker');

const router = express.Router();

/* products */

//GET

router.get('/', (req, res) =>  {
  const products = [];
  const { zise } = req.query;
  const limit = zise || 10;
  for (let i = 0; i < limit; i++) {
    products.push({
      id: i,
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      image: faker.image.image()
    });
  }
  res.json(products);
});

router.get('/:id', (req, res) =>  {
  const { id } = req.params.id;
  res.json({
    id,
    name: 'Producto 1',
    price: '$100'
  })
})

//POST
router.post('/products', (req, res) =>  {
  res.json({
    id: 1,
    name: 'Producto 1',
    price: '$100'
  })
})

//PUT
router.put('/products/:id', (req, res) =>  {
  const { id } = req.params.id;
  res.json({
    id,
    name: 'Producto 1',
    price: '$100'
  })
})

//DELETE
router.delete('/products/:id', (req, res) =>  {
  const { id } = req.params.id;
  res.json({
    id,
    name: 'Producto 1',
    price: '$100'
  })
})

module.exports = router;
