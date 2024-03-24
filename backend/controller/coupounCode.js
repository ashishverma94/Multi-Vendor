const express = require("express");
const upload = require("../multer.js");
const Shop = require("../model/shop.js");
const CoupounCode = require("../model/coupounCode.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors.js");
const { isSeller } = require("../middleware/auth");
const router = express.Router();

// CREATE EVENT
router.post(
  "/create-coupoun-code",
  isSeller,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const isCoupounCodeExists = await CoupounCode.find({
        name: req.body.name,
      });
      if (isCoupounCodeExists) {
        return next(new ErrorHandler("Coupoun Code already exists !", 400));
      }
      const coupounCode = await CoupounCode.create(req.body);
      res.status(201).json({
        success: true,
        coupounCode,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);
