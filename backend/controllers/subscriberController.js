const Subscriber = require("../models/Subscriber");

exports.addSubscriber = async (req, res) => {
  const subscriber = await Subscriber.create(req.body);
  res.status(201).json(subscriber);
};

exports.getSubscribers = async (req, res) => {
  const subscribers = await Subscriber.find().sort({ createdAt: -1 });
  res.json(subscribers);
};
