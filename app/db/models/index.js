
const { User, UserSchema} = require('./user');
const { Category, CategorySchema} = require('./categories');
const { File, FileSchema} = require('./file');
const { Product, ProductSchema} = require('./product');
const {Auth, AuthSchema} = require('./auth');
const {Customer, CustomerSchema} = require('./customers');

function setupModels(sequelize){
  User.init(UserSchema, User.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  File.init(FileSchema, File.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Auth.init(AuthSchema, Auth.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));

  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
}

module.exports = setupModels;

