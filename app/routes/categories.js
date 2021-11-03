const express = require('express');
const router = express.Router();
const CategoriesService = require('../services/categories');
const validatorHandler = require('../middlewares/validator');
const { getCategories } = require('../schema/categories');
const service = new CategoriesService();


/* categories */

//GET
router.get('/', async (req, res) =>  {
  const categories = await service.find();
  res.json(categories)
})

router.get('/:id',
  validatorHandler(getCategories, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const categorie = await service.findOne(id);
    res.json(categorie);
  } catch (error) {
    next(error);
  }
})

module.exports = router;
