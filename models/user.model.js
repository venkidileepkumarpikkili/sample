const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');

const User = sequelize.define('User', {
  name: DataTypes.STRING,
});

module.exports = User;
