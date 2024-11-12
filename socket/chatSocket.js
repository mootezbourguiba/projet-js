const Message = require('../models/Message');

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('Un utilisateur est connecté');
    
    // Quand un message est envoyé
    socket.on('chat message', async (msg) => {
      const message = await Message.create({ content: msg.content, username: msg.username });
      io.emit('chat message', message); // Diffuse le message à tous les clients
    });

    // Déconnexion de l'utilisateur
    socket.on('disconnect', () => {
      console.log('Utilisateur déconnecté');
    });
  });
};
