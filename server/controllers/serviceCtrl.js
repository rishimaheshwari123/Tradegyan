const Service = require('../models/serviceModel');
const Auth = require("../models/authModel"); // Adjust the path as necessary
const mailSender = require('../utils/mailSenderr');
const { messageViaEmail } = require('../template/messageViaEmail');

const createService = async (req, res) => {
    try {
        const {
            serviceName,
            description,
            serviceCategory,
            price,
            duration,
            availablePlans,
            advisorName,
            rating,
            targetAudience,
            riskLevel,
            investmentType,
            minInvestment,
            maxInvestment,
            serviceAvailability
        } = req.body;

        if (!serviceName || !description || !serviceCategory || !price || !duration) {
            return res.status(400).json({
                success: false,
                message: 'Please Provide All Fields',
            });
        }
        const newService = new Service({
            serviceName,
            description,
            serviceCategory,
            price,
            duration,
            availablePlans,
            advisorName,
            rating,
            targetAudience,
            riskLevel,
            investmentType,
            minInvestment,
            maxInvestment,
            serviceAvailability
        });

        const savedService = await newService.save();

        return res.status(201).json({
            success: true,
            message: 'Service created successfully',
            data: savedService
        });
    } catch (error) {
        console.error('Error creating service:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to create service',
            error: error.message
        });
    }
};


const getAllService = async (req, res) => {
    try {
        const services = await Service.find({});
        return res.status(200).json({
            success: true,
            services
        })

    } catch (error) {
        return res.status(500).json({
            message: "Error in getting all services",
            success: false
        })
    }
}


const getSingleService = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Service ID is required"
            });
        }

        const service = await Service.findById(id);
        if (!service) {
            return res.status(404).json({
                success: false,
                message: "Service not found"
            });
        }

        return res.status(200).json({
            success: true,
            service
        });

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Error in getting service",
            success: false
        });
    }
};

const singleServiceAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Service ID is required"
            });
        }

        const service = await Service.findById(id).populate("usersEnroled.user");
        if (!service) {
            return res.status(404).json({
                success: false,
                message: "Service not found"
            });
        }

        return res.status(200).json({
            success: true,
            service
        });

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Error in getting service",
            success: false
        });
    }
};




const getServices = async (req, res) => {
    try {
        console.log("first")
        const userId = req.user.id; // Assuming the user ID is available in req.user

        // Find the user by ID and populate their subscriptions with the corresponding service details
        const user = await Auth.findById(userId).populate("subscriptions.service");

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Filter and extract the services from the user's subscriptions
        const services = user.subscriptions
            .filter(subscription => subscription.isActive) // Only active subscriptions
            .map(subscription => ({
                serviceId: subscription.service._id, // Service ID
                serviceName: subscription.service.serviceName, // Assuming service has a name field
                description: subscription.service.description, // Assuming service has a description field
                enrollmentDate: subscription.enrollmentDate,
                expirationDate: subscription.expirationDate,
                // Add any other service fields you want to include
            }));

        // Send success response along with the services
        return res.status(200).json({ 
            success: true, // Success flag
            message: "Active services retrieved successfully", 
            services 
        });
    } catch (error) {
        console.error(error); // Log the error for debugging
        return res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};


// POST route to send a message to users of a specific service
const sendServiceEnrolledMessage = async (req, res) => {
    const { serviceId } = req.params;
    const { message, sendVia } = req.body;
  
    try {
      // Find the service by ID and populate users enrolled
      const service = await Service.findById(serviceId).populate("usersEnroled.user");
  
      if (!service) {
        return res.status(404).json({ error: "Service not found" });
      }
  
      // Filter users whose subscription has not expired
      const activeUsers = service.usersEnroled.filter(
        (userEnrolment) => new Date(userEnrolment.expirationDate) > new Date()
      );
  
      // Check if there are any active users
      if (activeUsers.length === 0) {
        return res.status(404).json({ message: "No active users found for this service" });
      }
  
      // Iterate over the active users to send messages
      for (const userEnrolment of activeUsers) {
        const user = userEnrolment.user; // Enrolled user object
  
        // Send WhatsApp message
        if (sendVia === "whatsapp" || sendVia === "both") {
          try {
            await sendWhatsAppMessage(user.whatsappNumber, message);
            console.log(`WhatsApp message sent to ${user.whatsappNumber}`);
          } catch (error) {
            console.error(`Failed to send WhatsApp message to ${user.whatsappNumber}:`, error.message);
          }
        }
  
        // Send Email
        if (sendVia === "email" || sendVia === "both") {
          try {
            await sendEmail(user?.email, message, user?.name);
            console.log(`Email sent to ${user.email}`);
          } catch (error) {
            console.error(`Failed to send email to ${user.email}:`, error.message);
          }
        }
      }
  
      return res.status(200).json({ message: "Messages sent successfully to active users." });
    } catch (error) {
      console.error("Error sending message:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };
  


const sendEmail = async (recipientEmail, messageContent, name) => {
    try {
      // Create a transporter object using SMTP transport
      await mailSender(recipientEmail,"TradeGyan Solution" ,messageViaEmail(messageContent,name) )
     
  
    } catch (error) {
      throw new Error(`Failed to send email: ${error.message}`);
    }
  };
  
  // Function to send WhatsApp message using WhatsApp Business API
  const sendWhatsAppMessage = async (whatsappNumber, messageContent) => {
    try {
      const url = `https://graph.facebook.com/v12.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`;
  
      const data = {
        messaging_product: 'whatsapp',
        to: `whatsapp:${whatsappNumber}`, // WhatsApp number with country code
        type: 'text',
        text: {
          body: messageContent,
        },
      };
  
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
      };
  
      // Send the WhatsApp message via the API
      await axios.post(url, data, { headers });
    } catch (error) {
      throw new Error(`Failed to send WhatsApp message: ${error.message}`);
    }
  };



module.exports = {
    createService, getAllService, getSingleService,getServices,singleServiceAdmin,sendServiceEnrolledMessage
};
