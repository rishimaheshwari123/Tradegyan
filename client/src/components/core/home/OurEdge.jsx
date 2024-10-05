import React from "react";
import { FaStar, FaShieldAlt, FaHeadset, FaChartLine } from "react-icons/fa";
import image from "../../../assets/our-edge-img.png";

const edge = [
  {
    icon: <FaStar className="text-5xl text-[#F5C300]" />,
    text: "15+ Years of Expertise",
  },
  {
    icon: <FaShieldAlt className="text-5xl text-[#F5C300]" />,
    text: "Fully Licensed & Regulated",
  },
  {
    icon: <FaHeadset className="text-5xl text-[#F5C300]" />,
    text: "Dedicated Support 24/7",
  },
  {
    icon: <FaChartLine className="text-5xl text-[#F5C300]" />,
    text: "Comprehensive Research & Analysis",
  },
];

const OurEdge = () => {
  return (
    <div className="lg:w-[80%] w-11/12 mx-auto text-white mt-10">
      <div className="grid lg:grid-cols-2 flex-wrap">
        {/* For mobile view */}
        <div className="lg:hidden text-center w-full my-10">
          <p className="text-4xl font-bold">Our Edge</p>
          <p className="mt-4 text-xl text-[#0afc3e]">
            Experience the confidence we bring to the trading world.
          </p>
        </div>

        <div className="relative">
          <div className="lg:min-h-[120px] min-h-[90px] absolute lg:min-w-[120px] min-w-[90px] border-t-[30px] border-r-[30px] max-w-[120px] lg:border-t-[40px] lg:border-r-[40px] border-[#F5C300] lg:-top-[50px] lg:right-[40px] -top-[40px] -right-[20px]"></div>

          <div className="lg:min-h-[120px] min-h-[90px] absolute lg:min-w-[120px] min-w-[90px] max-w-[120px] lg:border-b-[40px] lg:border-l-[40px] border-b-[30px] border-l-[30px] border-[#F5C300] lg:-bottom-[10px] lg:-left-[60px] -bottom-[50px] -left-[10px]"></div>

          <img src={image} alt="Our Edge" className="lg:h-[82%]" />
        </div>

        <div className="lg:w-[95%] mx-auto text-center lg:mt-0 mt-[20px]">
          {/* For larger screens */}
          <div className="hidden lg:block">
            <p className="text-4xl font-bold">Our Edge</p>
            <p className="mt-4 text-xl text-[#0afc3e]">
              Experience the confidence we bring to the trading world.
            </p>
          </div>

          <div>
            <ul className="grid grid-cols-2 gap-10">
              {edge.map((ele, ind) => (
                <li
                  key={ind}
                  className="w-[100px] text-[14px] text-center flex items-center flex-col mt-[60px]"
                >
                  <div className="mb-2">{ele.icon}</div>
                  <p className="text-[#0afc3e]">{ele.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurEdge;
