import React, { useEffect, useState } from "react";
import { getAllService } from "../../../services/operations/auth";

const GetAllService = () => {
  const [services, setServices] = useState([]);

  const getService = async () => {
    try {
      const response = await getAllService();
      setServices(response); // Assuming response is an array of services
    } catch (error) {
      console.error("Failed to fetch services:", error);
    }
  };

  useEffect(() => {
    getService();
  }, []);

  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service._id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out p-6"
          >
            <div className="flex flex-col space-y-4">
              <h2 className="text-xl font-semibold text-blue-600">{service.serviceName}</h2>
              <p className="text-gray-700">{service.description}</p>
              <div className="flex flex-col space-y-2">
                <span className="font-bold text-lg text-gray-900">
                  Price: ₹{service.price ? service.price.toLocaleString() : 'N/A'}
                </span>
                <span className="text-gray-600">Category: {service.serviceCategory || 'N/A'}</span>
                <span className="text-gray-600">Duration: {service.duration || 'N/A'}</span>
                <span className="text-gray-600">Available Plans: {service.availablePlans.join(", ") || 'N/A'}</span>
                <span className="text-gray-600">Advisor: {service.advisorName || 'N/A'}</span>
                <span className="text-gray-600">Rating: {service.rating ? `${service.rating} ⭐` : 'N/A'}</span>
                <span className="text-gray-600">Target Audience: {service.targetAudience || 'N/A'}</span>
                <span className="text-gray-600">Risk Level: {service.riskLevel || 'N/A'}</span>
                <span className="text-gray-600">Investment Type: {service.investmentType || 'N/A'}</span>
                <span className="text-gray-600">Min Investment: ₹{service.minInvestment ? service.minInvestment.toLocaleString() : 'N/A'}</span>
                <span className="text-gray-600">Max Investment: ₹{service.maxInvestment ? service.maxInvestment.toLocaleString() : 'N/A'}</span>
                <span className={`font-bold ${service.serviceAvailability ? 'text-green-600' : 'text-red-600'}`}>
                  Status: {service.serviceAvailability ? "Available" : "Unavailable"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetAllService;
