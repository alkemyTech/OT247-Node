const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Slide extends Model {
    static associate(models) {
      Slide.belongsTo(models.Organization, {
        foreignKey: 'id',
        target_key: 'organizationId',
      });
    }
  }
  Slide.init({
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    organizationId: DataTypes.INTEGER,
  }, {
    sequelize,
    paranoid: true,
    timestamp: true,
    modelName: 'Slide',
  });
  return Slide;
};
