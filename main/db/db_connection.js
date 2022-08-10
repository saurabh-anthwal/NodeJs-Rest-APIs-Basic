const Sequelize = require('sequelize');
require('dotenv').config();

let DATABASE = process.env.DATABASE
let PASSWORD = process.env.PASSWORD
let DB_HOST_NAME = process.env.DB_HOST_NAME
let USER_NAME = process.env.USER_NAME
let DIALLECT = process.env.DIALLECT

const sequelize = new Sequelize(DATABASE, USER_NAME, PASSWORD, {
    host: DB_HOST_NAME,
    dialect: DIALLECT
});

module.exports  = sequelize