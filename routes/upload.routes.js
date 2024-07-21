const express = require('express');
const router = express.Router();
const multer = require("multer");
const uploadController = require('../controllers/upload.controller');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now() + "-" + file.originalname}`);
    }
});

const upload = multer({ storage });

router.get("/upload", uploadController.getUpload);
router.post("/upload", upload.single("profileImage"), uploadController.postUpload);

module.exports = router;