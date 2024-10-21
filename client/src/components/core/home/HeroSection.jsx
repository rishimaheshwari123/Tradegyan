import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto p-5 grid grid-cols-1 lg:grid-cols-2 items-center">
        {" "}
        <div className="space-y-5 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800">
            Get started with <span className="text-indigo-600">Trade Gyan Solution.</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600">
            With lots of Advisors, you can easily build a future that you always
            dreamt of.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link
              to={"/service"}
              className="bg-orange-500 text-white px-6 py-3 rounded-full flex items-center space-x-3"
            >
              <span>Explore yourself</span>
            </Link>
          </div>

          <p className="text-sm  text-gray-500">
            Get it done with help of an Advisor.
          </p>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <img
            src="https://www.dashboardfinreport.com/template_UI/image/landing-1/woman.png"
            alt="Person with laptop"
            className="h-auto relative z-10 w-64 md:w-80 lg:w-auto"
          />

          <img
            src="https://www.dashboardfinreport.com/template_UI/image/landing-1/icon-chart.svg"
            alt="Chart Icon"
            className="absolute left-[5px] lg:left-[-50px] top-[30%] w-12 lg:w-16 animate-bounce-slow"
          />

          <img
            src="https://www.dashboardfinreport.com/template_UI/image/landing-1/chat-icon.svg"
            alt="Chat Icon"
            className="absolute top-[10px] right-[3px] lg:right-[-50px] w-10 lg:w-14 animate-bounce"
          />

          <img
            src="https://www.dashboardfinreport.com/template_UI/image/landing-1/icon-3d-target.svg"
            alt="Target Icon"
            className="absolute bottom-[5px] right-[3px] lg:right-[-50px] w-12 lg:w-16 animate-bounce-slow"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
