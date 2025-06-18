const express = require('express');
const dotenv = require('dotenv');
const { sequelize } = require('./models');

dotenv.config();
const app = express();
app.use(express.json());

const messageRoutes = require('./routes/message.routes');
app.use('/api/messages', messageRoutes);

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server on ${process.env.PORT}`);
  });
});
