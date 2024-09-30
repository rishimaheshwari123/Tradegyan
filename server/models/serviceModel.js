const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    serviceName: { type: String, required: true },
    description: { type: String, required: true },
    serviceCategory: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: String, required: true },
    availablePlans: { type: [String], default: [] },
    advisorName: { type: String },
    rating: { type: Number, default: 0 },
    targetAudience: { type: String },
    riskLevel: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Low",
    },
    investmentType: { type: String },
    minInvestment: { type: Number },
    maxInvestment: { type: Number },
    serviceAvailability: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Service", serviceSchema);
