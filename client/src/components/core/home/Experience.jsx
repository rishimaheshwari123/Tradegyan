import React from "react";
import {
  FaRegNewspaper,
  FaBell,
  FaChartLine,
  FaUsersCog,
  FaLightbulb,
  FaMobileAlt,
  FaBullseye,
  FaLaptopCode,
} from "react-icons/fa";

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
          <p className="text-gray-700 mb-8 text-xl">
            with Trade Gyan Trader
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Market Insights */}
            <div className="text-center">
              <FaRegNewspaper className="text-[#ffc400] text-5xl mx-auto" />
              <h4 className="text-lg font-bold text-gray-800">Market Insights</h4>
              <p className="text-gray-600 text-sm">Stay Updated</p>
            </div>

            {/* Alerts & Notifications */}
            <div className="text-center">
              <FaBell className="text-[#ffc400] text-5xl mx-auto" />
              <h4 className="text-lg font-bold text-gray-800">Alerts & Notifications</h4>
              <p className="text-gray-600 text-sm">Be Informed</p>
            </div>

            {/* Advanced Charting */}
            <div className="text-center">
              <FaChartLine className="text-[#ffc400] text-5xl mx-auto" />
              <h4 className="text-lg font-bold text-gray-800">Advanced Charting</h4>
              <p className="text-gray-600 text-sm">Strategic Analysis</p>
            </div>

            {/* User Insights */}
            <div className="text-center">
              <FaUsersCog className="text-[#ffc400] text-5xl mx-auto" />
              <h4 className="text-lg font-bold text-gray-800">User Insights</h4>
              <p className="text-gray-600 text-sm">Client Sentiments</p>
            </div>

            {/* Investment Strategies */}
            <div className="text-center">
              <FaLightbulb className="text-[#ffc400] text-5xl mx-auto" />
              <h4 className="text-lg font-bold text-gray-800">Investment Strategies</h4>
              <p className="text-gray-600 text-sm">Tailored Approaches</p>
            </div>

            {/* One-Tap Trading */}
            <div className="text-center">
              <FaMobileAlt className="text-[#ffc400] text-5xl mx-auto" />
              <h4 className="text-lg font-bold text-gray-800">One-Tap Trading</h4>
              <p className="text-gray-600 text-sm">Easy Access</p>
            </div>

            {/* Market Perspectives */}
            <div className="text-center">
              <FaBullseye className="text-[#ffc400] text-5xl mx-auto" />
              <h4 className="text-lg font-bold text-gray-800">Market Perspectives</h4>
              <p className="text-gray-600 text-sm">Comprehensive Views</p>
            </div>

            {/* Technical Analyses */}
            <div className="text-center">
              <FaLaptopCode className="text-[#ffc400] text-5xl mx-auto" />
              <h4 className="text-lg font-bold text-gray-800">Technical Analyses</h4>
              <p className="text-gray-600 text-sm">In-Depth Insights</p>
            </div>
          </div>
        </div>
        <div className="second flex justify-center items-center">
          <img
            src={"https://www.optionsplay.com/wp-content/themes/optionsplay/images/guy_using_tablet_graphic.png"}
            alt="Investment Opportunities"
            className="max-w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
