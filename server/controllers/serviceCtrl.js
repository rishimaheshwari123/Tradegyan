const Service = require('../models/serviceModel');
const Auth = require("../models/authModel"); // Adjust the path as necessary

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






module.exports = {
    createService, getAllService, getSingleService,getServices
};
