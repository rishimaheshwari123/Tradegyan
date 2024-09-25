import React from "react";
import {
  FaCoins,
  FaChartLine,
  FaHandshake,
  FaChess,
  FaUserShield,
  FaMoneyBillWave,
} from "react-icons/fa";

import h2 from "../../../../assets/banner-2.png";

const services = [
  {
    title: "Loan Against Securities",
    description: "We help you manage your portfolio",
    icon: <FaCoins />,
    image: h2,
  },
  {
    title: "Philanthropy and Social Investing",
    description:
      "Social change, donations, social impact investing, ESG investing.",
    icon: <FaHandshake />,
    image: h2,
  },
  {
    title: "Wealth Management",
    description: "We build your investment portfolio",
    icon: <FaChartLine />,
    image: h2,
  },
  {
    title: "Financial Planning",
    description: "We plan your finances for your future",
    icon: <FaMoneyBillWave />,
    image: h2,
  },
  {
    title: "NRI Services",
    description: "We shrink borders to diversify your investments",
    icon: <FaUserShield />,
    image: h2,
  },
  {
    title: "Risk Management",
    description: "We build your investment portfolio",
    icon: <FaChess />,
    image: h2,
  },
  {
    title: "Loan Against Securities",
    description: "We help you manage your portfolio",
    icon: <FaCoins />,
    image: h2,
  },
  {
    title: "Philanthropy and Social Investing",
    description:
      "Social change, donations, social impact investing, ESG investing.",
    icon: <FaHandshake />,
    image: h2,
  },
  {
    title: "Wealth Management",
    description: "We build your investment portfolio",
    icon: <FaChartLine />,
    image: h2,
  },
];

const Service = () => {
  return (
    <div className="container mx-auto my-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group text-white p-[1px]   overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-96 object-cover opacity-100 group-hover:opacity-90 transition-opacity duration-300"
            />
            <div className="absolute inset-0"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm mb-4">{service.description}</p>
              <button className="mt-4 text-sm text-white border border-white py-2 px-4 rounded hover:bg-white hover:text-black transition-all">
                KNOW MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
