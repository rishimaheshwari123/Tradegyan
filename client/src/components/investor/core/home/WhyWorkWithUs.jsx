import React from "react";
import { FaRegLightbulb, FaUsers, FaCog, FaChartLine } from "react-icons/fa";

const WhyWorkWithUs = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 w-11/12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#481E24]">
        Why Work with Us
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center">
        <div>
          <FaCog className="mx-auto text-4xl md:text-5xl text-[#481E24]" />
          <h3 className="text-xl md:text-2xl font-semibold text-[#481E24] mt-4">
            Our Motto
          </h3>
          <p className="mt-2 text-base md:text-lg text-gray-700">
            Our motto is to provide unbiased advice that is always in the best
            interest of the client.
          </p>
        </div>

        <div>
          <FaUsers className="mx-auto text-4xl md:text-5xl text-[#481E24]" />
          <h3 className="text-xl md:text-2xl font-semibold text-[#481E24] mt-4">
            Experience
          </h3>
          <p className="mt-2 text-base md:text-lg text-gray-700">
            Tradegyan Solutions Private Limited has over 20 years of experience
            in the financial advisory domain.
          </p>
        </div>

        <div>
          <FaRegLightbulb className="mx-auto text-4xl md:text-5xl text-[#481E24]" />
          <h3 className="text-xl md:text-2xl font-semibold text-[#481E24] mt-4">
            Competent
          </h3>
          <p className="mt-2 text-base md:text-lg text-gray-700">
            We recommend solutions after an in-depth analysis of investment
            options based on scientific data.
          </p>
        </div>

        <div>
          <FaChartLine className="mx-auto text-4xl md:text-5xl text-[#481E24]" />
          <h3 className="text-xl md:text-2xl font-semibold text-[#481E24] mt-4">
            Technology
          </h3>
          <p className="mt-2 text-base md:text-lg text-gray-700">
            Our Reporting and Financial Plan Platform thrives on technology
            making risk profiling accurate to enable better decision-making.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyWorkWithUs;
