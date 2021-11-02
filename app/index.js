
//importamos el modulos de router
const products = require('./routes/products');
const categories = require('./routes/categories');
const users = require('./routes/users');
const auth = require('./routes/auth');
const files = require('./routes/files');

// creamos la funcion routerApi
const routerApi = (app) => {
    app.use('/api/v1/products', products);
    app.use('/api/v1/categories', categories);
    app.use('/api/v1/users', users);
    app.use('/api/v1/auth', auth);
    app.use('/api/v1/files', files);
}

module.exports = routerApi;
