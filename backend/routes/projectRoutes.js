const express = require("express");
const router = express.Router();
const multer = require("multer");
const { addProject, getProjects } = require("../controllers/projectController");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/", upload.single("image"), addProject);
router.get("/", getProjects);

module.exports = router;
