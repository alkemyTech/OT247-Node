const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
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
