const express = require('express');
const router = express.Router();

/* users */

//GET
router.get('/', (req, res) =>  {
  const {limit, offset} = req.query;
  if(limit && offset){
    res.json({
      limit,
      offset
    })
  }else{
    res.send('limit and offset are required')
  }
})

//POST
router.post('/users', (req, res) =>  {
  res.json({
    id: 1,
    name: 'User 1',
    email: 'example@gmail.com',
    password: '123456'
  })
})

module.exports = router;
