exports.getFileupload = (req, res, next) => {
  if (req.session.mail != undefined) {
    return res.render("fileupload/fileuploadPage", { user: req.session.mail });
  } else {
    return res.render("fileupload/fileuploadPage", { user: "" });
  }
};

exports.postFileupload = (req, res, next) => {
  if (req.session.mail != undefined) {
    console.log(req);
  } else {
    console.log("---------------", req.body.text);
  }
};
