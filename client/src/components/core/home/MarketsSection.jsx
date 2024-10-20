import React from "react";
import {
  FaChartLine,
  FaBalanceScale,
  FaCoins,
  FaPiggyBank,
  FaLandmark,
  FaDollarSign,
} from "react-icons/fa";

const MarketsSection = () => {
  return (
    <section className="bg-blue-50 py-16 px-4">
      {/* Heading */}
      <div className="text-center ">
        <h2 className="text-3xl font-bold text-gray-800">
          Invest in Wide & Diversified Range of Financial Markets
        </h2>
        {/* <p className="text-gray-600 mt-4">
          Trade in over 125 global markets, worldwide
        </p> */}
      </div>

      {/* Graph and statistics */}
      <div className="relative flex flex-col items-center justify-center">
        {/* Background Image */}
        <img
          src="https://d10t455z86w23i.cloudfront.net/public/uploads/editor-images/images/markets/markets-graph-mob.png"
          alt="Financial markets graph"
          className=" h-[70vh] object-cover"
        />

        {/* Statistics icons and values */}
        <div className="absolute -bottom-10 left-1/2  transform lg:-translate-x-1/3 -translate-x-1/2 w-full max-w-6xl p-8 grid  grid-cols-3 lg:grid-cols-8 gap-6">
          <div className="text-center">
            <FaChartLine className="text-yellow-500 text-4xl mx-auto" />
            <h3 className="text-lg font-bold text-gray-800 mt-2">40,000</h3>
            <p className="text-gray-600">Shares</p>
          </div>
          <div className="text-center">
            <FaBalanceScale className="text-yellow-500 text-4xl mx-auto" />
            <h3 className="text-lg font-bold text-gray-800 mt-2">100+</h3>
            <p className="text-gray-600">Indices</p>
          </div>
          <div className="text-center">
            <FaCoins className="text-yellow-500 text-4xl mx-auto" />
            <h3 className="text-lg font-bold text-gray-800 mt-2">130</h3>
            <p className="text-gray-600">Commodities</p>
          </div>
          <div className="text-center">
            <FaLandmark className="text-yellow-500 text-4xl mx-auto" />
            <h3 className="text-lg font-bold text-gray-800 mt-2">90</h3>
            <p className="text-gray-600">Treasuries</p>
          </div>
          <div className="text-center">
            <FaPiggyBank className="text-yellow-500 text-4xl mx-auto" />
            <h3 className="text-lg font-bold text-gray-800 mt-2">2,000+</h3>
            <p className="text-gray-600">ETFs</p>
          </div>
          <div className="text-center">
            <FaDollarSign className="text-yellow-500 text-4xl mx-auto" />
            <h3 className="text-lg font-bold text-gray-800 mt-2">330</h3>
            <p className="text-gray-600">Currencies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketsSection;
