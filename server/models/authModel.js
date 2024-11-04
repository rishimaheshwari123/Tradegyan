const mongoose = require("mongoose");

const authSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      // required: true,
    },
    password: {
      type: String,
      required: true,
    },
    whatsappNumber: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "Admin", "SuperAdmin"],
      default: "user",
      required: true,
    },
    subscriptions: [
      {
        service: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Service",
          required: true,
        },
        enrollmentDate: {
          type: Date,
          default: Date.now,
        },
        expirationDate: {
          type: Date,
        },
        isActive: {
          type: Boolean,
          default: true,
        },
        // razorpay_order_id: { // Add this field
        //   type: String,
        // },
        // razorpay_payment_id: { // Add this field
        //   type: String,
        // },
        transaction_id: { // Add this field
          type: String,
        },
        payable: { // Add this field
          type: Number,
        },
        expiryMail:{
          type:Number,
          default:0
        }
      },
    ],
    token: {
      type: String,
    },
    isVerify: {
      type: Boolean,
      default: false,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("auth", authSchema);
