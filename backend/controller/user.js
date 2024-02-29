const express = require("express");
const router = express.Router();
const path = require("path");
const ErrorHandler = require("../utils/ErrorHandler.js");
const User = require("../model/user.js");
const upload = require("../multer.js");

router.post("/create-user", upload.single("avatar"), async (req, res, next) => {
  const { name, email, password, avatar } = req.body;
  const userEmail = await User.findOne({ email });

  if (userEmail) {
    return next(new ErrorHandler("User already exists", 400));
  }

  const filename = req.file.filename;
  const fileUrl = path.join(filename);

  const user = {
    name: name,
    email: email,
    password: password,
    avatar: fileUrl,
  };

  const newUser = await User.create(user);
  res.status(201).json({
    success: true,
    newUser,
  });

  console.log(user);
});

module.exports = router;
