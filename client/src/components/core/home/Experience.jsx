import React from "react";
import {
  FaRegNewspaper,
  FaBell,
  FaChartLine,
  FaLightbulb,
  FaBullseye,
  FaLaptopCode,
} from "react-icons/fa";

const Experience = () => {
  return (
    <div className="py-16 bg-cover bg-center relative text-center lg:text-start">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 p-5">
        <div className="first">
          <p className="lg:text-5xl text-3xl font-bold mb-4 text-black">
            Transform Your Trading Journey
          </p>
          <p className="text-[#282e29] mb-8 lg:text-2xl text-lg">
            with Trade Gyan Trader
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
            {/* Market Insights */}
            <div className="text-center">
              <FaRegNewspaper className="text-[#F5C300] lg:text-5xl text-3xl mx-auto" />
              <h4 className="lg:text-lg text-base font-bold text-black">
                Market Insights
              </h4>
              <p className="lg:text-sm text-xs text-white">Stay Updated</p>
            </div>

            {/* Alerts & Notifications */}
            <div className="text-center">
              <FaBell className="text-[#F5C300] lg:text-5xl text-3xl mx-auto" />
              <h4 className="lg:text-lg text-base font-bold text-black">
                Alerts & Notifications
              </h4>
              <p className="lg:text-sm text-xs text-white">Be Informed</p>
            </div>

            {/* Advanced Charting */}
            <div className="text-center">
              <FaChartLine className="text-[#F5C300] lg:text-5xl text-3xl mx-auto" />
              <h4 className="lg:text-lg text-base font-bold text-black">
                Advanced Charting
              </h4>
              <p className="lg:text-sm text-xs text-white">Strategic Analysis</p>
            </div>

            {/* Investment Strategies */}
            <div className="text-center">
              <FaLightbulb className="text-[#F5C300] lg:text-5xl text-3xl mx-auto" />
              <h4 className="lg:text-lg text-base font-bold text-black">
                Investment Strategies
              </h4>
              <p className="lg:text-sm text-xs text-white">Tailored Approaches</p>
            </div>

            {/* Market Perspectives */}
            <div className="text-center">
              <FaBullseye className="text-[#F5C300] lg:text-5xl text-3xl mx-auto" />
              <h4 className="lg:text-lg text-base font-bold text-black">
                Market Perspectives
              </h4>
              <p className="lg:text-sm text-xs text-white">Comprehensive Views</p>
            </div>

            {/* Technical Analyses */}
            <div className="text-center">
              <FaLaptopCode className="text-[#F5C300] lg:text-5xl text-3xl mx-auto" />
              <h4 className="lg:text-lg text-base font-bold text-black">
                Technical Analyses
              </h4>
              <p className="lg:text-sm text-xs text-white">In-Depth Insights</p>
            </div>
          </div>
        </div>
        <div className="second flex justify-center items-center">
          <img
            src={
              "https://www.optionsplay.com/wp-content/themes/optionsplay/images/guy_using_tablet_graphic.png"
            }
            alt="Investment Opportunities"
            className="max-w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
