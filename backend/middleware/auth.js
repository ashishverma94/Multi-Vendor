const ErrorHandler = require("../utils/ErrorHandler.js");
const jwt = require("jsonwebtoken");
const catchAsyncErrors = require("./catchAsyncErrors.js");
const User = require("../model/user.js");

exports.isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Please Login to continue !"));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  req.user = await User.findById(decoded.id);

  next();
});
