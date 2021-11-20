const express = require('express');

//importamos el modulos de router
const products = require('./routes/products');
const categories = require('./routes/categories');
const users = require('./routes/users');
const auth = require('./routes/auth');
const files = require('./routes/files');
const customer = require('./routes/customers');
const orders = require('./routes/orders');
const OrderProduct = require('./routes/orders-products');

// creamos la funcion routerApi
const routerApi = (app) => {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/products', products);
    router.use('/categories', categories);
    router.use('/users', users);
    router.use('/auth', auth);
    router.use('/files', files);
    router.use('/customers', customer);
    router.use('/orders', orders);
    router.use('/orders-products', OrderProduct);
}

module.exports = routerApi;
