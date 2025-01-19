const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
require("dotenv").config();

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const multer = require("multer");
const upload = multer();
app.use(upload.any());

//own module
const userRouter = require("./routes/user");
const adminRouter = require("./routes/admin");
const chatRouter = require("./routes/chat");
const fileuploadRouter = require("./routes/fileupload");
const vectorizeRouter = require("./routes/vectorize");
const retrieveRouter = require("./routes/retrieveFromPineconeRoute");

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: false,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(vectorizeRouter);
app.use(retrieveRouter);

app.use(express.static(path.join(__dirname, "/public")));


app.use(userRouter);
app.use("/admin", adminRouter);
app.use(chatRouter);
app.use(fileuploadRouter);

app.listen(3000, () => console.log("Server is Running..."));
