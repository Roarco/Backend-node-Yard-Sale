const { Model, DataTypes, Sequelize } = require('sequelize');

const AUTH_TABLE = 'auth';

const AuthSchema = {
  id: {
    allownull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  userId: {
    allownull: false,
    type: DataTypes.INTEGER,
  },
  token: {
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

class Auth extends Model {
  static associate() {
    //associate
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: AUTH_TABLE,
      modelName: 'Auth',
      timestamps: false,
    }
  }
}

module.exports = {
  AUTH_TABLE,
  AuthSchema,
  Auth,
}
