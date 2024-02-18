import { Sequelize } from 'sequelize';
const config = require('../config/database');

const db = new Sequelize(config);

export default db;