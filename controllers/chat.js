//moduler
// var mysql = require("mysql");

//authentication check
// exports.authentication = (req, res, next) => {
//   if (req.session.mail != undefined) {
//     next();
//   } else {
//     res.render("user/home", { user: "" });
//   }
// };

// show the chat page
exports.getChat = (req, res, next) => {
  if (req.session.mail != undefined) {
    return res.render("chat/chatPage", { user: req.session.mail });
  } else {
    return res.render("chat/chatPage", { user: "" });
  }
};
