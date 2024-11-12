const Project = require('../models/Project');

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    res.status(500).send('Erreur lors de la récupération des projets');
  }
};

exports.createProject = async (req, res) => {
  try {
    const { title, description, files } = req.body;
    const project = await Project.create({ title, description, files });
    res.status(201).json(project);
  } catch (error) {
    res.status(500).send('Erreur lors de la création du projet');
  }
};
