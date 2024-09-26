import React from "react";
import { FaRegNewspaper, FaBell, FaChartLine, FaUsersCog, FaLightbulb, FaMobileAlt, FaBullseye, FaLaptopCode } from "react-icons/fa";

const Experience = () => {
  return (
    <div
      className="bg-[#fdf7e6ea] lg:py-32 py-16 bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://d10t455z86w23i.cloudfront.net/public/uploads/editor-images/images/homepage-century-max/Background.png')`,
      }}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 p-5 lg:py-16">
        <div className="first">
          <p className="lg:text-5xl text-3xl font-bold mb-4">
            Transform Your Trading Journey
          </p>
          <p className="text-gray-700 mb-8 text-xl">with Century Trader</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-6">
            {/* Market Insights */}
            <div className="text-center">
              <FaRegNewspaper className="text-[#ffc400] text-6xl mx-auto" />
              <h4 className="text-xl font-bold text-gray-800">Market Insights</h4>
              <p className="text-gray-600">Stay Updated</p>
            </div>

            {/* Alerts & Notifications */}
            <div className="text-center">
              <FaBell className="text-[#ffc400] text-6xl mx-auto" />
              <h4 className="text-xl font-bold text-gray-800">Alerts & Notifications</h4>
              <p className="text-gray-600">Be Informed</p>
            </div>

            {/* Advanced Charting */}
            <div className="text-center">
              <FaChartLine className="text-[#ffc400] text-6xl mx-auto" />
              <h4 className="text-xl font-bold text-gray-800">Advanced Charting</h4>
              <p className="text-gray-600">Strategic Analysis</p>
            </div>

            {/* User Insights */}
            <div className="text-center">
              <FaUsersCog className="text-[#ffc400] text-6xl mx-auto" />
              <h4 className="text-xl font-bold text-gray-800">User Insights</h4>
              <p className="text-gray-600">Client Sentiments</p>
            </div>

            {/* Investment Strategies */}
            <div className="text-center">
              <FaLightbulb className="text-[#ffc400] text-6xl mx-auto" />
              <h4 className="text-xl font-bold text-gray-800">Investment Strategies</h4>
              <p className="text-gray-600">Tailored Approaches</p>
            </div>

            {/* One-Tap Trading */}
            <div className="text-center">
              <FaMobileAlt className="text-[#ffc400] text-6xl mx-auto" />
              <h4 className="text-xl font-bold text-gray-800">One-Tap Trading</h4>
              <p className="text-gray-600">Easy Access</p>
            </div>

            {/* Market Perspectives */}
            <div className="text-center">
              <FaBullseye className="text-[#ffc400] text-6xl mx-auto" />
              <h4 className="text-xl font-bold text-gray-800">Market Perspectives</h4>
              <p className="text-gray-600">Comprehensive Views</p>
            </div>

            {/* Technical Analyses */}
            <div className="text-center">
              <FaLaptopCode className="text-[#ffc400] text-6xl mx-auto" />
              <h4 className="text-xl font-bold text-gray-800">Technical Analyses</h4>
              <p className="text-gray-600">In-Depth Insights</p>
            </div>
          </div>
        </div>
        <div className="second flex justify-center items-center">
          <img
            src={"https://img.lovepik.com/element/40217/1929.png_1200.png"}
            alt="Investment Opportunities"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
