const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Organization extends Model {
    static associate(models) {}
  }
  Organization.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    welcomeText: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    aboutUsText: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    facebookUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    linkedinUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    instagramUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Organization',
    paranoid: true,
    timestamps: true,
  });
  return Organization;
};
