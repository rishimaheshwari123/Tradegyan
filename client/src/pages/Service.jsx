import React, { useEffect, useState } from "react";
import { FaRupeeSign } from "react-icons/fa"; // Rupee icon
import { AiOutlineCheckCircle } from "react-icons/ai"; // Check icon
import { getAllService } from "../services/operations/auth";
import { Link } from "react-router-dom";

const Service = () => {
  const [services, setServices] = useState([]);

  const getService = async () => {
    try {
      const response = await getAllService();
      setServices(response);
    } catch (error) {
      console.error("Failed to fetch services:", error);
    }
  };

  useEffect(() => {
    getService();
  }, []);

  return (
    <div id="services">
      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Our Pricing</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services?.map((service) => (
            <Link
              to={`/trader/service/${service._id}`}
              key={service._id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out p-6 flex flex-col justify-between items-start"
            >
              {/* Left Side - Icon and Service Details */}
              <div className="flex items-start w-full">
                <div className="mr-4">
                  {/* Placeholder for Service Icon/Image */}
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex justify-center items-center">
                    <FaRupeeSign className="text-green-500 text-3xl" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-2">
                    {service.serviceName}
                  </h2>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap items-center space-x-4">
                    <div className="flex items-center text-gray-600">
                      <FaRupeeSign className="text-green-500 mr-1" />
                      <span className="font-bold">
                        ₹{service.minInvestment}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <AiOutlineCheckCircle className="text-green-500 mr-1" />
                      <span>Low Volatility</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span>by {service.advisorName}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Badge */}
              <div className="text-center bg-green-500 text-white px-4 py-2 rounded-full mt-4 w-full">
                <span className="text-sm font-semibold">1 Year CAGR</span>
                <span className="mx-2">|</span>
                <span className="text-lg font-bold">{service.rating}⭐</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
