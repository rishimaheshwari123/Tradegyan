import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserTie, FaChartLine } from "react-icons/fa";

const Investment = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f4f0f1] py-12"> {/* Light grayish background for contrast */} 
      <h2 className="text-3xl font-bold text-center text-[#62000f] mb-8"> {/* Maroon heading */}
        Investment Profiles
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-10">
        {/* Investor Section */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            {/* Icon for investor */}
            <FaUserTie className="w-24 h-24 text-[#4b0e1a]" /> {/* Dark maroon icon */}
          </div>
          <h3 className="text-xl font-semibold mb-2 text-[#62000f]"> {/* Maroon subheading */}
            For Investors
          </h3>
          <p className="text-gray-700 mb-4">
            Explore tools to grow your investment portfolio
          </p>
          <button
            className="bg-[#62000f] text-white py-2 px-6 rounded-full font-medium hover:bg-[#8a2a2a] transition"
            onClick={() => navigate("/investor")}
          >
            Explore Investor Tools
          </button>
        </div>

        {/* Trader Section */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            {/* Icon for trader */}
            <FaChartLine className="w-24 h-24 text-[#4b0e1a]" /> {/* Dark maroon icon */}
          </div>
          <h3 className="text-xl font-semibold mb-2 text-[#62000f]"> {/* Maroon subheading */}
            For Traders
          </h3>
          <p className="text-gray-700 mb-4">
            Discover advanced trading tools for the market
          </p>
          <button
            className="bg-[#62000f] text-white py-2 px-6 rounded-full font-medium hover:bg-[#8a2a2a] transition"
            onClick={() => navigate("/trader")}
          >
            Explore Trader Tools
          </button>
        </div>
      </div>
    </div>
  );
};

export default Investment;
