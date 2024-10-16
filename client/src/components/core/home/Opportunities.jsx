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
      className="bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://www.century.ae/public/default/frontend/custom/images/dotted-map.png')`,
      }}
    >
      <div className="lg:max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 p-5">
        <div className="first">
          <p className="lg:text-5xl text-3xl font-bold mb-4 text-black text-center lg:text-start">
            Diverse opportunities unique to you
          </p>
          <p className="text-black mb-8 lg:text-xl text-lg text-center lg:text-start">
            With over 40,000 instruments across 125 markets and 31 countries
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6">
            {/* Shares */}
            <div className="text-center">
              <FaChartLine className="text-[#F5C300] lg:text-6xl text-4xl mx-auto" />
              <h4 className="lg:text-xl text-lg font-bold text-black">40,000</h4>
              <p className="text-black lg:text-base text-sm">Shares</p>
            </div>

            {/* Indices */}
            <div className="text-center">
              <FaCubes className="text-[#F5C300] lg:text-6xl text-4xl mx-auto" />
              <h4 className="lg:text-xl text-lg font-bold text-black">100+</h4>
              <p className="text-black lg:text-base text-sm">Indices</p>
            </div>

            {/* Commodities */}
            <div className="text-center">
              <FaGem className="text-[#F5C300] lg:text-6xl text-4xl mx-auto" />
              <h4 className="lg:text-xl text-lg font-bold text-black">130</h4>
              <p className="text-black lg:text-base text-sm">Commodities</p>
            </div>

            {/* Treasuries */}
            <div className="text-center">
              <FaUniversity className="text-[#F5C300] lg:text-6xl text-4xl mx-auto" />
              <h4 className="lg:text-xl text-lg font-bold text-black">90</h4>
              <p className="text-black lg:text-base text-sm">Treasuries</p>
            </div>

            {/* ETFs */}
            <div className="text-center">
              <FaMoneyBillWave className="text-[#F5C300] lg:text-6xl text-4xl mx-auto" />
              <h4 className="lg:text-xl text-lg font-bold text-black">2,000+</h4>
              <p className="text-black lg:text-base text-sm">ETFs</p>
            </div>

            {/* Currencies */}
            <div className="text-center">
              <FaCoins className="text-[#F5C300] lg:text-6xl text-4xl mx-auto" />
              <h4 className="lg:text-xl text-lg font-bold text-black">330</h4>
              <p className="text-black lg:text-base text-sm">Currencies</p>
            </div>
          </div>
          {/* <button className="mt-6 px-6 py-3 bg-[#260062] text-white rounded-lg transition duration-300 hover:bg-[#3c0070]">
            Learn More
          </button> */}
        </div>
        <div className="second flex justify-center items-center">
          <img
            src={img}
            alt="Investment Opportunities"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
