const Client = require("../models/Client");
const cloudinary = require("../config/cloudinary");

exports.addClient = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      width: 450,
      height: 350,
      crop: "fill",
    });

    const client = await Client.create({
      image: result.secure_url,
      name: req.body.name,
      description: req.body.description,
      designation: req.body.designation,
    });

    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getClients = async (req, res) => {
  const clients = await Client.find().sort({ createdAt: -1 });
  res.json(clients);
};
