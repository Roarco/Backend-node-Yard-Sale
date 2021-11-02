const express = require('express');
const router = express.Router();
const CategoriesService = require('../services/categories');

const service = new CategoriesService();

/* categories */

//GET
router.get('/', (req, res) =>  {
  const categories = service.find();
  res.json(categories)
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const categorie = service.findOne(id);
  res.json(categorie);
})

module.exports = router;
