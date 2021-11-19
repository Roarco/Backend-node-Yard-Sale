const { Model, DataTypes, Sequelize } = require('sequelize');

const AUTH_TABLE = 'auth';

const AuthSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  token: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
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
