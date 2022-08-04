const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.User, { foreignKey: 'userId' });
      Comment.belongsTo(models.News, { foreignKey: 'newsId' });
    }
  }
  Comment.init({
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    newsId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Comment',
    paranoid: true,
    timestamps: true,
  });
  return Comment;
};
