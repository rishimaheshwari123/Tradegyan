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
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/11/PU/NE/AL/3196176/loan-against-securities-services-500x500.jpeg",
  },
  {
    title: "Philanthropy and Social Investing",
    description:
      "Social change, donations, social impact investing, ESG investing.",
    icon: <FaHandshake />,
    image:
      "https://media.licdn.com/dms/image/C4D12AQGl8_zgBZqPQw/article-cover_image-shrink_720_1280/0/1626712989933?e=2147483647&v=beta&t=Rf6oSaMPdiv-g9jeE0PW0gY2qmSCaFvnFPa1Yvmvebc",
  },
  {
    title: "Wealth Management",
    description: "We build your investment portfolio",
    icon: <FaChartLine />,
    image:
      "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-48114,resizemode-75,msid-106261484/markets/stocks/news/from-consumer-to-custodian-the-changing-face-of-wealth-management-for-indias-elite.jpg",
  },
  {
    title: "Financial Planning",
    description: "We plan your finances for your future",
    icon: <FaMoneyBillWave />,
    image:
      "https://cdn.corporatefinanceinstitute.com/assets/financial-plan.jpeg",
  },
  {
    title: "NRI Services",
    description: "We shrink borders to diversify your investments",
    icon: <FaUserShield />,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5YDAepwbZngHqPAJ3S5EjAPRyYwwdw0qPsg&s",
  },
  {
    title: "Risk Management",
    description: "We build your investment portfolio",
    icon: <FaChess />,
    image:
      "https://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/PublishingImages/blog/posts/risk-management.jpg&w=1200&h=630",
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
            className="relative group text-white font-bold p-[1px]   overflow-hidden"
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
