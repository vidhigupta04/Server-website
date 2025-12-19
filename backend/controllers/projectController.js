const Project = require("../models/Project");

exports.addProjects = async (req, res) => {
  try {
    const projects = await Project.create({
      name: req.body.name,
      description: req.body.description,
      image: `http://localhost:5000/${req.file.path}`,
    });
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProjects = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
};
