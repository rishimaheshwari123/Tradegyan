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
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service._id}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out p-5"
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              {service.serviceName}
            </h2>
            <p className="text-gray-700 mb-4">{service.description}</p>
            <div className="flex flex-col space-y-2 mb-4">
              <span className="font-bold">Price: ${service.price}</span>
              <span>Category: {service.serviceCategory}</span>
              <span>Duration: {service.duration}</span>
              <span>Available Plans: {service.availablePlans.join(", ")}</span>
              <span>Advisor: {service.advisorName}</span>
              <span>Rating: {service.rating} ⭐</span>
              <span>Target Audience: {service.targetAudience}</span>
              <span>Risk Level: {service.riskLevel}</span>
              <span>Investment Type: {service.investmentType}</span>
              <span>Min Investment: ${service.minInvestment}</span>
              <span>Max Investment: ${service.maxInvestment}</span>
              <span>
                Status:{" "}
                {service.serviceAvailability ? "Available" : "Unavailable"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetAllService;
