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
router.post('/', (req, res) =>  {
  const body = req.body;
  res.json({
    body
  })
})

module.exports = router;
