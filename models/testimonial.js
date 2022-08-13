const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Testimonial extends Model {
    static associate() {
    }
  }
  Testimonial.init({
    name: { type: DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: false },
    content: { type: DataTypes.STRING, allowNull: false },
  }, {
    sequelize,
    modelName: 'Testimonial',
    paranoid: true,
    timestamps: true,
  });
  return Testimonial;
};
