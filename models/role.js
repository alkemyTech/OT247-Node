const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate() {
    }
  }
  Role.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Role',
    timestamps: true,
  });
  return Role;
};
