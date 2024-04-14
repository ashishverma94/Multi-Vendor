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
      automatic_payment_methods:{
        enabled:true
      },
      shipping: {
        name: "Random singh",
        address: {
          line1: "510 Townsend St",
          postal_code: "98140",
          city: "San Francisco",
          state: "CA",
          country: "US",
        },
      },
    });   

    res.status(201).json({
      success: true,
      message:"Process completed",
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

