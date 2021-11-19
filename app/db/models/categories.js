
const { Model, DataTypes } = require('sequelize');

const CATEGORIES_TABLE = 'categories';

const CategorySchema = {
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
  image: {
    allowNull: false,
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
