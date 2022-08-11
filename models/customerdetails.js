// const DBConnection = require("../db/db_connection");

'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  let CustomerDetails = sequelize.define('CustomerDetails',{
    title : DataTypes.STRING  
});

  class customerDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here


    }
  }

  
  customerDetails.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'customerDetails',
  });
  return customerDetails;
};

