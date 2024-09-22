const Service = require('../models/serviceModel');

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
module.exports = {
    createService, getAllService, getSingleService
};
