import React from "react";
import { FaStar } from "react-icons/fa";

const StatsSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center py-12 space-y-6 lg:space-y-0 lg:space-x-36 px-5 sm:px-8">
      <div className="">
        <h2 className="lg:text-4xl text-2xl font-semibold text-gray-800">
          Trusted by 20+ happy <br /> customers.
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8">
        {/* First Stat Card */}
        <div className="bg-blue-500 text-white rounded-lg shadow-lg p-6 sm:w-48 w-full text-center">
          <h3 className="text-4xl font-bold">150+</h3>
          <p className="mt-2">Active users visiting us every month!</p>
        </div>

        {/* Second Stat Card */}
        <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 sm:w-48 w-full text-center">
          <h3 className="text-4xl font-bold">4.3</h3>
          <div className="flex justify-center items-center mt-2">
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-gray-500" />
          </div>
          <p className="mt-2">1,034 Rating</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
