const express = require('express');
const User = require('../models/user');

const router = express.Router();

// Route pour créer un nouvel utilisateur
router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;

