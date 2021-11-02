const express = require('express');
const router = express.Router();
const authService = require('../services/auth');

const services = new authService();

/* auth */

//GET
router.get('/', (req, res) =>  {
  const auth = services.find();
  res.json(auth);
})

//POST
router.post('/', (req, res) =>  {
  const body = req.body;
  services.created(body);
  res.json({
    message: 'Auth created'
  })
})

module.exports = router;
