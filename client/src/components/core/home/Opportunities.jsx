import React from "react";
import {
  FaChartLine,
  FaCubes,
  FaUniversity,
  FaMoneyBillWave,
  FaGem,
  FaCoins,
} from "react-icons/fa";
import img from "../../../assets/img1.png";

const Opportunities = () => {
  return (
    <div
      className=" bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://www.century.ae/public/default/frontend/custom/images/dotted-map.png')`,
      }}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 p-5">
        <div className="first">
          <p className="lg:text-5xl text-3xl font-bold mb-4 text-[#F5C300]">
            {/* Maroon heading */}
            Diverse opportunities unique to you
          </p>
          <br />
          <p className="text-[#0afc3e] mb-8 text-xl">
            With over 40,000 instruments across 125 markets and 31 countries
          </p>
          <br />
          <br />
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6">
            {/* Shares */}
            <div className="text-center">
              <FaChartLine className="text-[#F5C300] text-6xl mx-auto" />{" "}
              {/* Darker golden icon */}
              <h4 className="text-xl font-bold text-[#0afc3e]">40,000</h4>{" "}
              {/* Green text */}
              <p className="text-white">Shares</p>
            </div>

            {/* Indices */}
            <div className="text-center">
              <FaCubes className="text-[#F5C300] text-6xl mx-auto" />{" "}
              {/* Darker golden icon */}
              <h4 className="text-xl font-bold text-[#0afc3e]">100+</h4>{" "}
              {/* Green text */}
              <p className="text-white">Indices</p>
            </div>

            {/* Commodities */}
            <div className="text-center">
              <FaGem className="text-[#F5C300] text-6xl mx-auto" />{" "}
              {/* Darker golden icon */}
              <h4 className="text-xl font-bold text-[#0afc3e]">130</h4>{" "}
              {/* Green text */}
              <p className="text-white">Commodities</p>
            </div>

            {/* Treasuries */}
            <div className="text-center">
              <FaUniversity className="text-[#F5C300] text-6xl mx-auto" />{" "}
              {/* Darker golden icon */}
              <h4 className="text-xl font-bold text-[#0afc3e]">90</h4>{" "}
              {/* Green text */}
              <p className="text-white">Treasuries</p>
            </div>

            {/* ETFs */}
            <div className="text-center">
              <FaMoneyBillWave className="text-[#F5C300] text-6xl mx-auto" />{" "}
              {/* Darker golden icon */}
              <h4 className="text-xl font-bold text-[#0afc3e]">2,000+</h4>{" "}
              {/* Green text */}
              <p className="text-white">ETFs</p>
            </div>

            {/* Currencies */}
            <div className="text-center">
              <FaCoins className="text-[#F5C300] text-6xl mx-auto" />{" "}
              {/* Darker golden icon */}
              <h4 className="text-xl font-bold text-[#0afc3e]">330</h4>{" "}
              {/* Green text */}
              <p className="text-white">Currencies</p>
            </div>
          </div>
          <button className="mt-6 px-4 py-2 bg-[#260062] text-white">
            Learn More
          </button>
        </div>
        <div className="second flex justify-center items-center">
          <img
            src={img}
            alt="Investment Opportunities"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
