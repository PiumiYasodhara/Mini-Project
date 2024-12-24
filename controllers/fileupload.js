exports.getFileupload = (req, res, next) => {
  if (req.session.mail != undefined) {
    return res.render("fileupload/fileuploadPage", { user: req.session.mail });
  } else {
    return res.render("fileupload/fileuploadPage", { user: "" });
  }
};
