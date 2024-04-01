const express = require("express");
const upload = require("../multer.js");
const Shop = require("../model/shop.js");
const Product = require("../model/product.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors.js");
const { isSeller } = require("../middleware/auth.js");

const router = express.Router();

// CREATE PRODUCT
router.post(
  "/create-product",
  upload.array("images"),
  catchAsyncErrors(async (req, res, next) => {
    try {
      const shopId = req.body.shopId;
      const shop = await Shop.findById(shopId);
      if (!shop) {
        return next(new ErrorHandler("shop Id is invalid!", 400));
      } else {
        const files = req.files;
        console.log(files);
        const imageUrls = files.map((file) => `${file.filename}`);
        const productData = req.body;
        productData.images = imageUrls;
        productData.shop = shop;

        const product = await Product.create(productData);
        res.status(201).json({
          success: true,
          product,
        });
      }
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

// GET ALL PRODUCTS FOR SHOP
router.get(
  "/get-all-products-shop/:id",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const products = await Product.find({ shopId: req.params.id });
      res.status(201).json({
        success: true,
        products,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

// DELETE PRODUCT
router.delete(
  "/delete-shop-product/:id",
  isSeller, 
  catchAsyncErrors(async (req, res, next) => {
    try {
      const productId = req.params.id;
      const product = await Product.findByIdAndDelete(productId);

      if (!product) {
        return next(new ErrorHandler("Product not found with this id ", 500));
      }
      res.status(201).json({
        success: true,
        message:"Product deleted successfully!",
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

router.get(
  "/get-all-products",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const products = await Product.find().sort({ createdAt: -1 });

      res.status(201).json({
        success: true,
        products,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);


module.exports = router;
