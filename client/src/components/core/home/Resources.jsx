import React from "react";
import { FaChalkboardTeacher, FaLightbulb, FaBookOpen } from "react-icons/fa";

const Resources = () => {
  const resourcesData = [
    {
      title: "Workshops & Webinars",
      description:
        "Enhance your trading skills with our comprehensive workshops and interactive webinars tailored for all levels.",
      buttonText: "Join Now",
      icon: <FaChalkboardTeacher className="text-4xl text-[#F5C300]" />,
    },
    {
      title: "Strategic Insights",
      description:
        "Access a wide array of trading strategies covering over 10,000 derivatives, all with competitive spreads.",
      buttonText: "Discover More",
      icon: <FaLightbulb className="text-4xl text-[#F5C300]" />,
    },
    {
      title: "Resource Hub",
      description:
        "Explore our extensive library filled with articles, videos, and market analyses to stay informed.",
      buttonText: "Explore Now",
      icon: <FaBookOpen className="text-4xl text-[#F5C300]" />,
    },
  ];

  return (
    <section className="bg-black py-12 p-4">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white">
          Essential Resources for Every Trader
        </h2>
        <p className="text-[#0afc3e] mt-2">
          With years of experience and a wealth of knowledge at your fingertips, we’re here to support your trading journey.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {resourcesData.map((resource, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="mb-4 flex items-center justify-center h-16 w-16 bg-yellow-100 rounded-full mx-auto">
              {resource.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
            <p className="text-gray-600 mb-6">{resource.description}</p>
            <button className="bg-[#260062] hover:bg-yellow-600 text-white flex m-auto font-bold py-2 px-4 rounded-full">
              {resource.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resources;
