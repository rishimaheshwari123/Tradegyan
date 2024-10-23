// models/Complaint.js
const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema(
  {
    year: { type: String, required: true }, // Example: "2023-24"
    month: { type: String, required: true }, // Example: "September 2024"
    source: { type: String, required: true }, // Example: "Directly From Investors", "SEBI (SCORES)", etc.
    receivedFrom: { type: String, required: true },
    received: { type: Number, default: 0 },
    resolved: { type: Number, default: 0 },
    pending: { type: Number, default: 0 },
    pendingLastMonth: { type: Number, default: 0 },
    pendingComplaintsLessThanThreeMonths: { type: Number, default: 0 },
    averageResolutionTime: { type: Number, default: 0 }, // In days
  },
  { timestamps: true }
);

module.exports = mongoose.model("Complaint", complaintSchema);
