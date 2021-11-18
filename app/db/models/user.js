
const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
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
  email: {
    allownull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allownull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allownull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
}

class User extends Model {
  static associate() {
    //associate
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false,
    }
  }
}

module.exports = {
  USER_TABLE,
  UserSchema,
  User,
}



