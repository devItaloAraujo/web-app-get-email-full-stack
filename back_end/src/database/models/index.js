const Sequelize = require('sequelize');
const config = require('../config/database');

const db = new Sequelize(config);

module.exports = db;