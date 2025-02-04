const express = require("express");
const router = express.Router();
const { augmentFromAnLLMController } = require("../controllers/augmentFromAnLLMController.js");

router.post("/augment", augmentFromAnLLMController);

module.exports = router;