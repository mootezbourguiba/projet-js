const express = require('express');
const Message = require('../models/message');

const router = express.Router();

// Route pour créer un nouveau message
router.post('/', async (req, res) => {
  try {
    const message = await Message.create(req.body);
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
