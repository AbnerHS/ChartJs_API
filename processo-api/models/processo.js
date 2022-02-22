'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Processo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Processo.init({
    persistenceId: DataTypes.INTEGER,
    CASEID: DataTypes.INTEGER,
    DATAABERTURA: DataTypes.STRING,
    SOLICITANTEDEPARTAMENTO: DataTypes.STRING,
    STATUSPROCESSO: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Processo',
  });
  return Processo;
};