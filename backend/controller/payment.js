const express = require("express");
const catchAsyncErrors = require("../middleware/catchAsyncErrors.js");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const router = express.Router();

// CREATE COUPON
router.post(
  "/process",
  catchAsyncErrors(async (req, res, next) => {
    const myPayment = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: "inr",
      metadata: {
        company: "eshop",
      },
    });
    res.status(201).json({
      success: true,
      client_secret: myPayment.client_secret,
    });
  })
);

router.get( 
  "/stripeapikey",
  catchAsyncErrors(async (req, res, next) => {
    res.status(200).json({
      stripeApiKey: process.env.STRIPE_API_KEY,
    }); 
  }) 
); 

module.exports = router ;

