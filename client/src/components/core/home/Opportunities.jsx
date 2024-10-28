import React from "react";
import {
  FaChartLine,
  FaCubes,
  FaUniversity,
  FaMoneyBillWave,
  FaGem,
  FaCoins,
} from "react-icons/fa";
import img from "../../../assets/shares.png";
import bgImage from '../../../assets/dotted-map.png';

const Opportunities = () => {
  return (
    <div
      className="bg-cover bg-center relative "
      style={{
        backgroundImage: bgImage,
      }}
    >
      <div className="lg:max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 p-5">
        <div className="first">
          <p className="lg:text-5xl text-3xl font-bold mb-4 text-black text-center lg:text-start">
            Diverse Investment Opportunities, Tailored for You
          </p>
          <p className="text-black mb-8 lg:text-2xl text-sm text-center lg:text-start">
            Discover a variety of financial products that empower you to make informed investment decisions.
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-6">
            {/* Shares */}
            <div className="text-center">
              <FaChartLine className="text-[#F5C300] lg:text-6xl text-4xl mx-auto" />
              <p className="text-black lg:text-base text-sm">Shares</p>
            </div>

            {/* Indices */}
            <div className="text-center">
              <FaCubes className="text-[#F5C300] lg:text-6xl text-4xl mx-auto" />
              <p className="text-black lg:text-base text-sm">Indices</p>
            </div>

            {/* Commodities */}
            <div className="text-center">
              <FaGem className="text-[#F5C300] lg:text-6xl text-4xl mx-auto" />
              <p className="text-black lg:text-base text-sm">Commodities</p>
            </div>

            {/* Treasuries */}
            <div className="text-center">
              <FaUniversity className="text-[#F5C300] lg:text-6xl text-4xl mx-auto" />
              <p className="text-black lg:text-base text-sm">Treasuries</p>
            </div>

            {/* ETFs */}
            <div className="text-center">
              <FaMoneyBillWave className="text-[#F5C300] lg:text-6xl text-4xl mx-auto" />
              <p className="text-black lg:text-base text-sm">ETFs</p>
            </div>

            {/* Currencies */}
            <div className="text-center">
              <FaCoins className="text-[#F5C300] lg:text-6xl text-4xl mx-auto" />
              <p className="text-black lg:text-base text-sm">Currencies</p>
            </div>
          </div>
        </div>
        <div className="second flex justify-center items-center">
          <img
            src={img}
            alt="Investment Opportunities"
            className="max-w-full h-[75%] rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
