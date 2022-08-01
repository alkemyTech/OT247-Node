const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Member.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      facebookUrl: { type: DataTypes.STRING },
      instagramUrl: { type: DataTypes.STRING },
      linkedinUrl: { type: DataTypes.STRING },
      image: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING },
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
