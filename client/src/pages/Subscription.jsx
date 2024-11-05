import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa"; // Import icons from React Icons
import { useSelector } from "react-redux";
import { getAllServices } from "../services/operations/auth";
import { Link } from "react-router-dom";

// ServiceCard Component
const ServiceCard = ({ service }) => {
    // Get current date
    const currentDate = new Date();
    const expirationDate = new Date(service.expirationDate);
    const daysRemaining = Math.ceil((expirationDate - currentDate) / (1000 * 60 * 60 * 24)); // Calculate remaining days

    // Determine status and message based on expiration
    let statusMessage;
    let statusIcon;

    if (daysRemaining > 0) {
        statusMessage = `Active - ${daysRemaining} days remaining`;
        statusIcon = <FaCheckCircle style={{ color: 'green' }} />;
    } else {
        statusMessage = "Expired";
        statusIcon = <FaExclamationCircle style={{ color: 'red' }} />;
    }

    return (
        <Link to={`/trader/service/${service?.serviceId}`} className="service-card border border-gray-300 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-gray-800">{service.serviceName}</h3>
            <p className="text-gray-600">{service.description}</p>
            <p className="text-sm text-gray-500">Enrollment Date: {new Date(service.enrollmentDate).toLocaleDateString()}</p>
            <p className="text-sm text-gray-500">Expiration Date: {new Date(service.expirationDate).toLocaleDateString()}</p>
            <div className="status flex items-center mt-4">
                {statusIcon}
                <span className="ml-2 text-gray-700">{statusMessage}</span>
            </div>
        </Link>
    );
};

// ServicesList Component
const ServicesList = () => {
    const { token } = useSelector((state) => state.auth);
    const [services, setServices] = useState([]);

    const fetchServices = async () => {
        try {
            const response = await getAllServices(token);
            console.log(response); // Log the entire response
            setServices(response || []); // Assuming the response directly returns an array of services
        } catch (error) {
            console.error("Error fetching services:", error);
        }
    };

    useEffect(() => {
        if (token) {
            fetchServices();
        } else {
            console.warn("No token available. Services will not be fetched.");
        }
    }, [token]);

    return (
        <div className="services-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 min-h-screen overflow-y-scroll max-h-screen min-w-full  bg-gradient-to-r from-gray-200 to-gray-400 ">
            {services.length > 0 ? (
                services.map((service) => (
                    <ServiceCard key={service.serviceId} service={service} />
                ))
            ) : (
                <p className="text-center col-span-3 text-gray-500">No services available.</p> // Fallback message
            )}
        </div>
    );
};

export default ServicesList;
