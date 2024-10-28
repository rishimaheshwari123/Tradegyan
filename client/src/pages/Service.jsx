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
      <div className="p-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-10 text-center text-gray-800">
          Our Pricing
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services?.map((service) => (
            <Link
              to={`/trader/service/${service._id}`}
              key={service._id}
              className="relative bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col overflow-hidden"
            >
              {/* Rating Badge at the Top */}
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                {service.rating}⭐
              </div>

              {/* Main Content */}
              <div className="flex flex-col justify-between p-6">
                {/* Icon and Service Name */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-14 h-14 bg-gray-200 rounded-full flex justify-center items-center">
                    <FaRupeeSign className="text-green-500 text-2xl" />
                  </div>
                  <h2 className="text-xl font-semibold text-blue-600">
                    {service.serviceName}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm">
                  {service.description}
                </p>

                {/* Details Section */}
                <div className="flex items-center justify-between border-t pt-4 mt-4 text-gray-700">
                  <div className="text-left space-y-2">
                    <div className="flex items-center space-x-2">
                      <FaRupeeSign className="text-green-500" />
                      <span className="font-bold">
                        ₹{service.minInvestment}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <AiOutlineCheckCircle className="text-green-500" />
                      <span>Low Volatility</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      <span>by {service.advisorName}</span>
                    </div>
                  </div>

                  {/* Bottom Button */}
                  <div className="bg-yellow-600 text-white px-4 py-2 rounded-lg text-center">
                    <span className="text-sm font-semibold">1 Year</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">
            “Free” Advice is more Expensive than “Fee” Advice
          </h2>
          <p className="text-gray-700">
            Clients should be rest assured that advice which is given to them is
            unbiased, Fiduciary standard, transparent, SEBI Compliant, free from
            any hidden charges or commissions, and backed by decades of
            investing and financial planning experience of the team at Trade
            Gyan Solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
