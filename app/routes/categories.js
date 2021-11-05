const express = require('express');
const router = express.Router();
const CategoriesService = require('../services/categories');
const validatorHandler = require('../middlewares/validator');
const { getCategories, createCategory, updateCategory } = require('../schema/categories');
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
    const categorie = await service.findOne(parseInt(id));
    res.json(categorie);
  } catch (error) {
    next(error);
  }
})

//POST
router.post('/',
  validatorHandler(createCategory, 'body'),
  async (req, res) =>  {
  const body = req.body;
  const categorie = await service.create(body);
  res.json(categorie);
})

//PATCH
router.patch('/update/:id',
  validatorHandler(getCategories, 'params'),
  validatorHandler(updateCategory, 'body'),
  async (req, res, next) =>  {
    try {
      const { id } = req.params;
      const body = req.body;
      const updatedProduct = await service.update(parseInt(id), body);
      res.json(updatedProduct);
    } catch (error) {
      next(error);
    }
  })

module.exports = router;
