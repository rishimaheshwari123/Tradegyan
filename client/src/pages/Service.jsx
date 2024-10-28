import React, { useEffect, useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
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
    <div id="services" className="bg-gradient-to-br from-blue-50 to-green-50 py-10">
      <div className="p-8 max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-extrabold mb-10 text-center text-black">
          Our Pricing Plans
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services?.map((service) => (
            <Link
              to={`/trader/service/${service._id}`}
              key={service._id}
              className="relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out flex flex-col overflow-hidden transform hover:-translate-y-2"
            >
              {/* Rating Badge */}
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
                {service.rating}⭐
              </div>

              {/* Card Content */}
              <div className="flex flex-col justify-between p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex justify-center items-center shadow-sm">
                    <FaRupeeSign className="text-blue-600 text-3xl" />
                  </div>
                  <h2 className="text-2xl font-semibold text-blue-700">
                    {service.serviceName}
                  </h2>
                </div>

                <p className="text-gray-600 mb-4 text-sm">
                  {service.description}
                </p>

                {/* Pricing and Details */}
                <div className="flex flex-col items-start border-t pt-4 mt-4 space-y-2 text-gray-700">
                  <div className="flex items-center space-x-2">
                    <FaRupeeSign className="text-green-600" />
                    <span className="font-bold text-lg">₹{service.minInvestment}</span>
                    <span className="text-sm text-gray-500">/ {service?.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <AiOutlineCheckCircle className="text-green-600" />
                    <span>Low Volatility</span>
                  </div>
                  <div className="text-sm text-[#686767] font-semibold">
                    By :- <span className="4"> {service.advisorName}</span>
                  </div>
                </div>
              </div>

              {/* Hover "Know More" Button */}
              <div className="absolute inset-0 bg-blue-800 bg-opacity-75 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">Know More</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-lg font-semibold mb-4 text-blue-800">
            “Free” Advice is more Expensive than “Fee” Advice
          </h2>
          <p className="text-gray-700">
            Clients should be rest assured that advice given to them is unbiased,
            transparent, SEBI Compliant, free from any hidden charges or commissions,
            and backed by the extensive experience of the team at Trade Gyan Solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
