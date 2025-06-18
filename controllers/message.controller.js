const User = require('../models/user.model');
const Message = require('../models/message.model');

exports.sendMessage = async (req, res) => {
  const { senderId, receiverId, text } = req.body;
  const message = await Message.create({ text, senderId, receiverId });
  res.json(message);
};

exports.getChat = async (req, res) => {
  const { user1, user2 } = req.params;
  const messages = await Message.findAll({
    where: {
      senderId: [user1, user2],
      receiverId: [user1, user2],
    },
    order: [['createdAt', 'ASC']],
  });
  res.json(messages);
};
