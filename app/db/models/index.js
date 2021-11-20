
const { User, UserSchema} = require('./user');
const { Category, CategorySchema} = require('./categories');
const { File, FileSchema} = require('./file');
const { Product, ProductSchema} = require('./product');
const {Auth, AuthSchema} = require('./auth');
const {Customer, CustomerSchema} = require('./customers');
const {Order, OrderSchema} = require('./orders');
const {OrderProduct, OrderProductSchema} = require('./order-product');


function setupModels(sequelize){
  User.init(UserSchema, User.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  File.init(FileSchema, File.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Auth.init(AuthSchema, Auth.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));


  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
  Order.associate(sequelize.models);
}

module.exports = setupModels;

