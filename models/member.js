const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    static associate() {
    }
  }
  Member.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      facebookUrl: { type: DataTypes.STRING, allowNull: true },
      instagramUrl: { type: DataTypes.STRING, allowNull: true },
      linkedinUrl: { type: DataTypes.STRING, allowNull: true },
      image: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: true },
    },
    {
      sequelize,
      timestamps: true,
      paranoid: true,
      modelName: 'Member',
    },
  );
  return Member;
};
