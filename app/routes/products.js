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
      id:i,
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
router.post('/', (req, res) => {
  const body = req.body;
  res.json({
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
