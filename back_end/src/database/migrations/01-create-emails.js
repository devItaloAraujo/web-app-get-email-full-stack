const DataTypes = require('sequelize').DataTypes;

module.exports = {
  up: (queryInterface) => {
    return queryInterface.createTable('emails', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    });
  },
  down(queryInterface) {
    return queryInterface.dropTable('emails');
  }
};