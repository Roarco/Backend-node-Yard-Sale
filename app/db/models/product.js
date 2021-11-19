const { Model, DataTypes } = require('sequelize');

const PRODUCT_TABLE = 'products';

const ProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  price: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  categorieId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    foreignKey: true,
    references: {
      model: 'categories',
      key: 'id',
    },
    image: {
      allowNull: false,
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
