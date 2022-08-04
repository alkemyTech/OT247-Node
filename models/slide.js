const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Slide extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
