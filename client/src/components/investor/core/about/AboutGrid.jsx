import React from "react";
import {
  FaHandshake,
  FaShieldAlt,
  FaRegLightbulb,
  FaCog,
  FaCertificate,
  FaCheckCircle,
} from "react-icons/fa";

const cards = [
  {
    title: "Values",
    description:
      "We value our clients and put their interests in the forefront. Their integrity and fiduciary capacity are of paramount importance to us. We cut the jargon and deliver what we promise.",
    icon: <FaHandshake className="text-4xl mb-4" />,
    bgColor: "bg-[#631f28] text-white",
  },
  {
    title: "Trust",
    description:
      "We walk our talk and practice what we preach. We are transparent about our services, fees, what we can deliver and what we cannot. Hear what our clients have to say.",
    icon: <FaShieldAlt className="text-4xl mb-4" />,
    bgColor: "bg-[#3b4451] text-white",
  },
  {
    title: "Process Driven",
    description:
      "We are more about being solution-centric than product-centric. Our strategies are practical, realistic, and timebound. Our methods and processes follow SEBI RIA guidelines.",
    icon: <FaRegLightbulb className="text-4xl mb-4" />,
    bgColor: "bg-gray-200 text-[#631f28]",
  },
  {
    title: "Competent",
    description:
      "We recommend solutions after an in-depth analysis of investment options based on scientific data. Every recommendation is backed by research, helping us suggest options that align with our client’s risk tolerance.",
    icon: <FaCog className="text-4xl mb-4" />,
    bgColor: "bg-gray-200 text-[#631f28]",
  },
  {
    title: "Technology Driven",
    description:
      "Our Reporting and Financial Plan Platform thrives on technology making risk profiling accurate to enable better decision making, with robust, comprehensive and up-to-date reporting.",
    icon: <FaCertificate className="text-4xl mb-4" />,
    bgColor: "bg-[#631f28] text-white",
  },
  {
    title: "Credibility",
    description:
      "There is no shortcut to success. Our credibility comes with our Director, TradeGyan Solution, who is a panel member of Outlook Money. She has also won the Best Woman Financial Advisory Award in 2018 and 2019 - All India.",
    icon: <FaCheckCircle className="text-4xl mb-4" />,
    bgColor: "bg-[#3b4451] text-white",
  },
];

const AboutGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-7xl mx-auto">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`transform hover:rotate-360 hover:scale-95 transition-all duration-500 ease-in-out ${card.bgColor} p-6 flex flex-col items-center justify-center`}
        >
          {card.icon}
          <h2 className="text-2xl font-bold">{card.title}</h2>
          <p className="mt-2 text-center">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutGrid;
