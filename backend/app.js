const express = require("express");
const cors = require("cors");
const path = require("path");


const projectRoutes = require("./routes/projectRoutes");
const clientRoutes = require("./routes/clientRoutes");
const contactRoutes = require("./routes/contactRoutes");
const subscriberRoutes = require("./routes/subscriberRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/projects", projectRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/subscribe", subscriberRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

module.exports = app;