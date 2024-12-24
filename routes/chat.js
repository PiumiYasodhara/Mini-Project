const express = require("express");
const path = require("path");

const router = express.Router();

const chatControler = require("../controllers/chat");

// router
//   .route("/login")
//   .get(userControler.getLogin) // get request for login
//   .post(userControler.postLogin); // post request for login

// when the url is /chat, control the behavior (what to show), through the chatControler's getChat function
router.get("/chat", chatControler.getChat);

module.exports = router;
