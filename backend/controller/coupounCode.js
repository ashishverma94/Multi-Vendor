const express = require("express");
const Shop = require("../model/shop.js");
const CoupounCode = require("../model/coupounCode.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors.js");
const { isSeller } = require("../middleware/auth");
const router = express.Router();

// CREATE COUPON
router.post(
  "/create-coupon-code",
  isSeller,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const isCoupounCodeExists = await CoupounCode.find({
        name: req.body.name,
      });
      if (isCoupounCodeExists.length !== 0) {
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

// GET ALL COUPON
router.get(
  "/get-coupon/:id",
  isSeller,
  catchAsyncErrors(async (req, res, next) => {
    try { 
      const couponCodes = await CoupounCode.find({shopId:req.params.id});
 
      res.status(201).json({
        success: true,
        couponCodes, 
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  }) 
);
 
// DELETE COUPON
router.delete(     
  "/delete-coupon/:id",      
  isSeller, 
  catchAsyncErrors(async (req, res, next) => {
    try {     
      const couponCode = await CoupounCode.findByIdAndDelete(req.params.id);

      if (!couponCode) {
        return next(new ErrorHandler("Coupon code dosen't exists!", 400));
      }
      res.status(201).json({
        success: true,
        message: "Coupon code deleted successfully!",
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

// GET COUPON CODE VALUE BY ITS NAME
router.get(
  "/get-coupon-value/:name",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const couponCode = await CoupounCode.findOne({ name: req.params.name });

      res.status(200).json({
        success: true,
        couponCode,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

module.exports = router;
