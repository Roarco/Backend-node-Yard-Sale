//requerimos express
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>  {
    res.send('Hello World!');
});
app.get('/creador', (req, res) =>  {
  res.json({
    nombre: 'Juan',
    apellido: 'Perez',
    edad: '30',
    perfil: "Software Engineering is "
})
});
app.get('/products', (req, res) =>  {
  res.json({
  name: 'Product 1',
  price: '$100',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
})
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
