const Service = require("../models/serviceModel");
const User = require("../models/authModel");
const moment = require("moment");
const { paymentSuccessEmail } = require("../template/serviceEnroll");
const mailSender = require("../utils/mailSenderr");
const { instance } = require("../config/razorpay");
const crypto = require("crypto")
const capturePayment = async (req, res) => {
  const { serviceId } = req.body;

  try {
    // Fetch service details
    const serviceDetails = await Service.findById(serviceId);
    if (!serviceDetails) {
      return res
        .status(404)
        .json({ success: false, message: "Service not found" });
    }

    const totalAmount = serviceDetails.price;

    // Prepare payment options
    const options = {
      amount: totalAmount * 100, // Convert to paise (1 INR = 100 paise)
      currency: "INR",
      receipt: `receipt_${Date.now()}`, // More reliable receipt generation
    };

    // Initiate payment using your preferred gateway (e.g., Razorpay)
    const paymentResponse = await instance.orders.create(options); // Ensure `instance` is initialized correctly

    // Return payment details to the client
    res.json({
      success: true,
      data: paymentResponse,
    });
  } catch (error) {
    console.error("Capture Payment Error:", error);
    res
      .status(500)
      .json({ success: false, message: "Could not initiate order." });
  }
};

const paymentVerification = async (req, res) => {
  console.log("enter verify");
  const razorpay_order_id = req.body?.razorpay_order_id;
  const razorpay_payment_id = req.body?.razorpay_payment_id;
  const razorpay_signature = req.body?.razorpay_signature;
  const service = req.body?.service;
  const payable = req.body?.payable;

  const userId = req.user.id;

  let body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_SECRET)
    .update(body.toString())
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    try {
      // Call the createOrder function

      await enrollInService(
        userId,
        service,
        razorpay_order_id,
        razorpay_payment_id,
        payable
      );

      // Send the response after the order is successfully created
      return res
        .status(200)
        .json({ success: true, message: "Payment Verified" });
    } catch (error) {
      // Handle any errors that occur during order creation
      console.error("Error creating order:", error);
      return res
        .status(500)
        .json({ success: false, message: "Error creating order" });
    }
  }

  return res.status(200).json({ success: false, message: "Payment Failed" });
};

// Enroll a user in a service
const enrollInService = async (
  userId,
  serviceId,
  razorpay_order_id,
  razorpay_payment_id,
  payable
) => {
  try {
    const service = await Service.findById(serviceId);
    if (!service) {
      throw new Error("Service not found");
    }

    // Calculate expiration date based on service duration (assumed to be in days)
    const enrollmentDate = new Date();
    const durationInDays = Number(service.duration) || 30;
    const expirationDate = moment(enrollmentDate).add(durationInDays, 'days').toDate();


         // Format the dates for better readability
         const formattedEnrollmentDate = moment(enrollmentDate).format('dddd, MMMM Do YYYY, h:mm:ss A');
         const formattedExpirationDate = moment(expirationDate).format('dddd, MMMM Do YYYY, h:mm:ss A');
 
    const userDetails = await User.findById(userId);

    // Add to user's subscriptions
    await User.findByIdAndUpdate(userId, {
      $push: {
        subscriptions: {
          service: serviceId,
          enrollmentDate,
          expirationDate,
          isActive: true,
          razorpay_order_id, // Add this field
          razorpay_payment_id, // Add this field
          payable, // Add this field
        },
      },
    });

    // Add user to the service's enrolled users
    await Service.findByIdAndUpdate(serviceId, {
      $push: {
        usersEnroled: {
          user: userId,
          enrollmentDate, // Use formatted date here
          expirationDate ,   // Use formatted date here
          razorpay_order_id, // Add this field
          razorpay_payment_id, // Add this field
          payable, // Add this field
        },
      },
    });

    await mailSender(
      userDetails.email,
      "TradeGyan Solution",
      paymentSuccessEmail(
        userDetails.name,
        service.serviceName,
        enrollmentDate,
        expirationDate
      )
    );

    console.log(`User ${userId} successfully enrolled in service ${serviceId}`);
  } catch (error) {
    console.error("Error enrolling user in service:", error.message);
    throw new Error(error.message || "Enrollment failed");
  }
};

// Check for expired subscriptions (e.g., during login or dashboard view)
const checkForExpiredSubscriptions = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    let hasExpiredSubscriptions = false;

    user.subscriptions.forEach((subscription) => {
      if (new Date() > subscription.expirationDate) {
        subscription.isActive = false;
        hasExpiredSubscriptions = true;
      }
    });

    // Save user only if there are changes (inactive subscriptions)
    if (hasExpiredSubscriptions) {
      await user.save();
      console.log(`Expired subscriptions updated for user ${userId}`);
    }
  } catch (error) {
    console.error("Error checking for expired subscriptions:", error.message);
    throw new Error(error.message || "Failed to check subscriptions");
  }
};

module.exports = { capturePayment, paymentVerification };
