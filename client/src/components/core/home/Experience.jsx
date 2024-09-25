import React from "react";
import { SiSimpleanalytics } from "react-icons/si";
import { MdNotificationsActive } from "react-icons/md";
import { FaChartLine } from "react-icons/fa6";
import { SiCliqz } from "react-icons/si";
import { GrNotes } from "react-icons/gr";
import { FcSmartphoneTablet } from "react-icons/fc";
import { SiMarketo } from "react-icons/si";
import { MdLaptopMac } from "react-icons/md";

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
          <p className="lg:text-5xl text-3xl  font-bold mb-4">
            Elevate Your Trading Experience
          </p>
          <br />
          <p className="text-gray-700 mb-8 text-xl">with Century Trader</p>
          <br />
          <br />
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-6 ">
            {/* Shares */}
            <div className="text-center">
              <SiSimpleanalytics className="text-[#ffc400] text-6xl mx-auto" />
              <h4 className="text-xl font-bold text-gray-800">News</h4>
              <p className="text-gray-600">Analysis</p>
            </div>

            <div className="text-center">
              <MdNotificationsActive className="text-[#ffc400] text-6xl mx-auto" />
              <h4 className="text-xl font-bold text-gray-800">Notification</h4>
              <p className="text-gray-600">& Alerts+</p>
            </div>

            {/* Treasuries */}
            <div className="text-center">
              <FaChartLine className="text-[#ffc400] text-6xl mx-auto" />
              <h4 className="text-xl font-bold text-gray-800">Advance</h4>
              <p className="text-gray-600">Charting</p>
            </div>

            {/* ETFs */}
            <div className="text-center">
              <SiCliqz className="text-[#ffc400] text-6xl mx-auto" />
              <h4 className="text-xl font-bold text-gray-800">Client</h4>
              <p className="text-gray-600">Sentiment</p>
            </div>

            {/* Currencies */}
            <div className="text-center">
              <GrNotes className="text-[#ffc400] text-6xl mx-auto" />
              <h4 className="text-xl font-bold text-gray-800">Investment</h4>
              <p className="text-gray-600">Strategies</p>
            </div>
            <div className="text-center">
              <FcSmartphoneTablet className="text-[#ffc400] text-6xl mx-auto" />
              <h4 className="text-xl font-bold text-gray-800">One-tap</h4>
              <p className="text-gray-600">Trading</p>
            </div>
            <div className="text-center">
              <SiMarketo className="text-[#ffc400] text-6xl mx-auto" />
              <h4 className="text-xl font-bold text-gray-800">Market Views</h4>
              <p className="text-gray-600"> & Insights</p>
            </div>
            <div className="text-center">
              <MdLaptopMac className="text-[#ffc400] text-6xl mx-auto" />
              <h4 className="text-xl font-bold text-gray-800">
                Market Technical
              </h4>
              <p className="text-gray-600">Views</p>
            </div>
          </div>
        </div>
        <div className="second flex justify-center items-center">
          <img
            src={"https://upload.century.ae/upload/700.png"}
            alt="Investment Opportunities"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
