
const db = require('./index');
const DataTypes = require('sequelize').DataTypes;


const EmailModel = db.define('email', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
}, {
  tableName: 'emails',
  timestamps: false,
  underscored: true,
});

module.exports = EmailModel;