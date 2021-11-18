const { Model, DataTypes } = require('sequelize');

const PRODUCT_TABLE = 'products';

const ProductSchema = {
  id: {
    allownull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allownull: false,
    type: DataTypes.STRING,
  },
  price: {
    allownull: false,
    type: DataTypes.INTEGER,
  },
  description: {
    allownull: false,
    type: DataTypes.STRING,
  },
  categorieId: {
    allownull: false,
    type: DataTypes.INTEGER,
    foreignKey: true,
    references: {
      model: 'categories',
      key: 'id',
    },
    image: {
      allownull: false,
      type: DataTypes.STRING,
    }
  },
};

class Product extends Model {
  static associate() {
    //associate
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: false,
    }
  }
}

module.exports = {
  PRODUCT_TABLE,
  ProductSchema,
  Product,
}
