import React from "react";
import { FaUserFriends, FaPhone } from "react-icons/fa";
import sbi from "../../../../assets/sbi.png";
const WhoWeAre = () => {
  return (
    <div className="relative bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 lg:px-8">
        {/* Left Side - Image */}
        <div className="relative">
          {/* Background image */}
          <img
            src={sbi} // Replace with your actual image URL
            alt="Stock trading"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col justify-center space-y-6">
          {/* Title */}
          <h2 className="text-3xl font-bold text-yellow-500">Who We Are</h2>
          <div className="h-1 w-12 bg-yellow-500"></div>

          {/* Description */}
          <p className="text-lg leading-relaxed">
            We are SEBI Registered Investment Advisor Firm, Providing Stock &
            Commodity Market Recommendations, For Who trade in NSE, BSE, and MCX
            market.
          </p>

          {/* Icons Section */}
          <div className="flex space-x-8">
            <div className="flex items-center space-x-2">
              <FaUserFriends className="text-2xl text-teal-400" />
              <span className="text-lg font-semibold">Dedicated Team</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone className="text-2xl text-teal-400" />
              <span className="text-lg font-semibold">Technical Advisors</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
