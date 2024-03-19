const mongoose = require("mongoose");
const eventSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your event product name!"],
  },

  description: {
    type: String,
    required: [true, "Please enter your event product description!"],
  },

  category: {
    type: String,
    required: [true, "Please enter your event product category!"],
  },

  startDate: {
    type: Date,
    required: true,
  },

  endDate: {
    type: Date,
    required: true,
  },

  status: {
    type: String,
    default: "Running",
  },

  tags: {
    type: String,
    required: [true, "Please enter your event product tags!"],
  },

  originalPrice: {
    type: Number,
    required: [true, "Please enter your product price!"],
  },

  discountPrice: {
    type: Number,
    required: [true, "Please enter your discount price!"],
  },

  stock: {
    type: Number,
    required: [true, "Please enter your product stock!"],
  },

  images: [
    {
      type: String,
    },
  ],

  shopId: {
    type: String,
    required: true,
  },

  shop: {
    type: Object,
    required: true,
  },

  sold_out: {
    type: Number,
    default: 0,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Event", eventSchema);
