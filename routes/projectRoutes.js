const express = require('express');
const Project = require('../models/project');

const router = express.Router();

// Route pour créer un nouveau projet
router.post('/', async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;

