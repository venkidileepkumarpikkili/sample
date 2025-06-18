const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');
const User = require('./user.model');

const Message = sequelize.define('Message', {
  text: DataTypes.STRING,
});

Message.belongsTo(User, { as: 'sender' });
Message.belongsTo(User, { as: 'receiver' });

module.exports = Message;
