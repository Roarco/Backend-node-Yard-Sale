'use strict';

const { UserSchema, USER_TABLE} = require('../models/user');
const {CategorySchema, CATEGORIES_TABLE} = require('../models/categories');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(CATEGORIES_TABLE, CategorySchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(CATEGORIES_TABLE);
  }
};
