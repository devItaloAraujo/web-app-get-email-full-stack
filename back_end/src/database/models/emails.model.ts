import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import db from './index';


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

export default EmailModel;