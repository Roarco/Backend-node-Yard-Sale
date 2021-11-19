
const { Model, DataTypes} = require('sequelize');

const FILE_TABLE = 'files';

const FileSchema = {
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
  file: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING,
  },
};

class File extends Model {
  static associate() {
    //associate
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: FILE_TABLE,
      modelName: 'File',
      timestamps: false,
    }
  }
}

module.exports = {
  FILE_TABLE,
  FileSchema,
  File,
}
