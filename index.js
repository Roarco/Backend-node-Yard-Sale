//requerimos express y faker
const express = require('express');
const faker = require('faker');
const app = express();
const port = 4000;

/* products */

//GET

app.get('/products', (req, res) =>  {
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

app.get('/products/:id', (req, res) =>  {
  const { id } = req.params.id;
  res.json({
    id,
    name: 'Producto 1',
    price: '$100'
  })
})

//POST
app.post('/products', (req, res) =>  {
  res.json({
    id: 1,
    name: 'Producto 1',
    price: '$100'
  })
})

//PUT
app.put('/products/:id', (req, res) =>  {
  const { id } = req.params.id;
  res.json({
    id,
    name: 'Producto 1',
    price: '$100'
  })
})

//DELETE
app.delete('/products/:id', (req, res) =>  {
  const { id } = req.params.id;
  res.json({
    id,
    name: 'Producto 1',
    price: '$100'
  })
})


/* users */

//GET
app.get('/users', (req, res) =>  {
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
app.post('/users', (req, res) =>  {
  res.json({
    id: 1,
    name: 'User 1',
    email: 'example@gmail.com',
    password: '123456'
  })
})

/* auth */

//GET
app.get('/auth/profile', (req, res) =>  {
  res.json({
    token: '123456'
  })
})

//POST
app.post('/auth/login', (req, res) =>  {
  res.json({
    token: '123456'
  })
})

/* categories */

//GET
app.get('/categories', (req, res) =>  {
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

app.get('/categories/:id/products', (req, res) => {
  const { id } = req.params;
  res.json([
    {
      id,
    },
  ]);
})

/* files */

//POST
app.post('/files/upload', (req, res) =>  {
  res.json({
    id: 1,
    name: 'File 1',
    url: 'http://example.com/file1.jpg'
  })
})

//GET
app.get('/files/:filename', (req, res) =>  {
  const { filename } = req.params;
  res.sendFile(`${__dirname}/files/${filename}`);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
