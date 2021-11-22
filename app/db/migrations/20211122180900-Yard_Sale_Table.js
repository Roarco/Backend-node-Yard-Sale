'use strict';

const { UserSchema, USER_TABLE} = require('../models/user');
const {CustomerSchema , CUSTOMER_TABLE} = require('../models/customers');
const {CategorySchema , CATEGORIES_TABLE} = require('../models/categories');
const {ProductSchema , PRODUCT_TABLE} = require('../models/product');
const {OrderSchema , ORDER_TABLE} = require('../models/orders');
const {OrderProductSchema , ORDER_PRODUCT_TABLE} = require('../models/order-product');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
    await queryInterface.createTable(CATEGORIES_TABLE, CategorySchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
    await queryInterface.createTable(ORDER_TABLE, OrderSchema);
    await queryInterface.createTable(ORDER_PRODUCT_TABLE, OrderProductSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(CUSTOMER_TABLE);
    await queryInterface.dropTable(CATEGORIES_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(ORDER_TABLE);
    await queryInterface.dropTable(ORDER_PRODUCT_TABLE);
  }
};
