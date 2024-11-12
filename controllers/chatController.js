const Message = require('../models/Message');

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.findAll();
    res.json(messages);
  } catch (error) {
    res.status(500).send('Erreur lors de la récupération des messages');
  }
};

exports.createMessage = async (req, res) => {
  try {
    const { content, username } = req.body;
    const message = await Message.create({ content, username });
    res.status(201).json(message);
  } catch (error) {
    res.status(500).send('Erreur lors de la création du message');
  }
};
