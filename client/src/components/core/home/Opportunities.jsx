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
      className="bg-[#fdf7e6ea] lg:py-32 py-16 bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://www.century.ae/public/default/frontend/custom/images/dotted-map.png')`,
      }}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 p-5">
        <div className="first">
          <p className="lg:text-5xl text-3xl  font-bold mb-4">
            Diverse opportunities unique to you
          </p>
          <br />
          <p className="text-gray-700 mb-8 text-xl">
            With over 40,000 instruments across 125 markets and 31 countries
          </p>
          <br />
          <br />
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 ">
            {/* Shares */}
            <div className="text-center">
              <FaChartLine className="text-[#ffc400] text-6xl mx-auto" />
              <h4 className="text-xl font-bold text-gray-800">40,000</h4>
              <p className="text-gray-600">Shares</p>
            </div>

            {/* Indices */}
            <div className="text-center">
              <FaCubes className="text-[#ffc400] text-6xl mx-auto" />
              <h4 className="text-xl font-bold text-gray-800">100+</h4>
              <p className="text-gray-600">Indices</p>
            </div>

            {/* Commodities */}
            <div className="text-center">
              <FaGem className="text-[#ffc400] text-6xl mx-auto" />
              <h4 className="text-xl font-bold text-gray-800">130</h4>
              <p className="text-gray-600">Commodities</p>
            </div>

            {/* Treasuries */}
            <div className="text-center">
              <FaUniversity className="text-[#ffc400] text-6xl mx-auto" />
              <h4 className="text-xl font-bold text-gray-800">90</h4>
              <p className="text-gray-600">Treasuries</p>
            </div>

            {/* ETFs */}
            <div className="text-center">
              <FaMoneyBillWave className="text-[#ffc400] text-6xl mx-auto" />
              <h4 className="text-xl font-bold text-gray-800">2,000+</h4>
              <p className="text-gray-600">ETFs</p>
            </div>

            {/* Currencies */}
            <div className="text-center">
              <FaCoins className="text-[#ffc400] text-6xl mx-auto" />
              <h4 className="text-xl font-bold text-gray-800">330</h4>
              <p className="text-gray-600">Currencies</p>
            </div>
          </div>
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
