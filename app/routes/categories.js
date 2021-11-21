const express = require('express');
const router = express.Router();
const CategoriesService = require('../services/categories');
const validatorHandler = require('../middlewares/validator');
const { getCategories, createCategory, updateCategory, querySchema } = require('../schema/categories');
const service = new CategoriesService();


/* categories */

//GET
router.get('/', async (req, res, next) =>  {
  try {
    const categories = await service.find();
    res.json(categories)
  } catch (error) {
    next(error);
  }
})

router.get('/:id/products/',
  validatorHandler(getCategories, 'params'),
  validatorHandler(querySchema, 'query'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const categorie = await service.findOne(parseInt(id), req.query);
    res.json(categorie);
  } catch (error) {
    next(error);
  }
})

//POST
router.post('/',
  validatorHandler(createCategory, 'body'),
  async (req, res, next) =>  {
  try {
    const body = req.body;
    const categorie = await service.create(body);
    res.json(categorie);
  } catch (error) {
    next(error);
  }
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
      res.json({
        message: 'Categorie updated',
        updatedProduct
      });
    } catch (error) {
      next(error);
    }
  })

module.exports = router;
