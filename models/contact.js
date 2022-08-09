const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    static associate() {
    }
  }
  Contact.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.INTEGER,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      message: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      timestamps: true,
      paranoid: true,
      modelName: 'Contact',
    },
  );
  return Contact;
};
