const mongoose = require("mongoose");

const coupounCodeSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Please enter your event product name!"],
  },

  value: {
    type: Number,
    required: true,
  },

  minAmount: {
    type: Number,
  },

  maxAmount: {
    type: Number,
  },

  shop:{
    type:Object,
    required:true,
  },
  selectedProduct:{
    type:String,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("CoupounCode", coupounCodeSchema);
