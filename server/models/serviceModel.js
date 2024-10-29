const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    serviceName: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    serviceCategory: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    duration: {
      type: String,
      required: true,
      default:'30', // For example, '30 days', '1 year', etc.
      trim: true,
    },
    availablePlans: {
      type: [String],
      default: [],
    },
    advisorName: {
      type: String,
      trim: true,
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    targetAudience: {
      type: String,
      trim: true,
    },
    riskLevel: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Low",
    },
    investmentType: {
      type: String,
      trim: true,
    },
    minInvestment: {
      type: Number,
      min: 0,
    },
    maxInvestment: {
      type: Number,
      min: 0,
    },
    serviceAvailability: {
      type: Boolean,
      default: true,
    },
    usersEnroled: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "auth",
          required: true,
        },
        enrollmentDate: {
          type: Date,
          default: Date.now,
          required: true,
        },
        expirationDate: {
          type: Date,
          required: true,
        },
        // razorpay_order_id: { // Add this field
        //   type: String,
        //   required: true,
        // },
        // razorpay_payment_id: { // Add this field
        //   type: String,
        //   required: true,
        // },
        transaction_id: { // Add this field
          type: String,
        },
        payable: { // Add this field
          type: Number,
          required: true,
        },
      },
    ],
  
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Service", serviceSchema);
