'use strict';
const {
  Model
} = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  class stan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, { foreignKey: 'userID'});
      this.hasMany(models.menu, { foreignKey: 'stanID'});
      this.hasMany(models.transaksi, { foreignKey: 'stanID'});
      this.hasMany(models.diskon, { foreignKey: 'stanID'});
    }
  }
  stan.init({
    stanID: {
      allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nama_stan: {
      type: DataTypes.STRING
    },
    nama_pemilik: {
      type: DataTypes.STRING
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'stan',
  });
  return stan;
};