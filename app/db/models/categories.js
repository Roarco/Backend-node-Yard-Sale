
const { Model, DataTypes } = require('sequelize');

const CATEGORIES_TABLE = 'categories';

const CategorySchema = {
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
  image: {
    allownull: false,
    type: DataTypes.STRING,
  },
}

class Category extends Model {
  static associate() {
    //associate
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORIES_TABLE,
      modelName: 'Category',
      timestamps: false,
    }
  }
}

module.exports = {
  CATEGORIES_TABLE,
  CategorySchema,
  Category,
}
