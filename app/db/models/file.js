
const { Model, DataTypes} = require('sequelize');

const FILE_TABLE = 'files';

const FileSchema = {
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
  file: {
    allownull: false,
    type: DataTypes.STRING,
  },
  description: {
    allownull: false,
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
