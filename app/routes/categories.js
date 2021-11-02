const express = require('express');
const router = express.Router();

/* categories */

//GET
router.get('/', (req, res) =>  {
  res.json([
    {
      id: 1,
      name: 'Categoria 1'
    },
    {
      id: 2,
      name: 'Categoria 2'
    },
    {
      id: 3,
      name: 'Categoria 3'
    }
  ])
})

router.get('/:id/products', (req, res) => {
  const { id } = req.params;
  res.json([
    {
      id,
    },
  ]);
})

module.exports = router;
