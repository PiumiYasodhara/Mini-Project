const express = require("express");
const router = express.Router();
const { vectorizeText } = require("../controllers/vectorizeController");

router.post("/vectorize", vectorizeText);

module.exports = router;