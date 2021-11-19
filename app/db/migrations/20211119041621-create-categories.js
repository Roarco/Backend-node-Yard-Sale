'use strict';

const {CategorySchema, CATEGORIES_TABLE} = require('../models/categories');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(CATEGORIES_TABLE, CategorySchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(CATEGORIES_TABLE);
  }
};
