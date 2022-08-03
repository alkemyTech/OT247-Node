'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  News.init({
    name: DataTypes.STRING,
    content: DataTypes.STRING,
    image: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    type: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'News',
    timestamps: true,
    paranoid: true,
  });

  return News;
};
