import React from "react";
import { Link } from "react-router-dom";
import equity from '../../../../assets/services/quity.png'
const TradingTips = () => {
  const tipsData = [
    {
      title: "Equity Trading",
      description:
        "The Equity Trading Tips Services Includes Intraday & Positional Stock Trading Advice, BTST For Stocks Listed in NSE And BSE",
      imgSrc: 'https://mkfinserve.in/wp-content/uploads/2023/12/Trading-Securities-1.jpg',
      path: "/equity",
    },
    {
      title: "Commodity",
      description:
        "The Derivative Trading Tips Services Includes Intraday & Positional Future & Option, BTST Trading Advice, For Stocks Listed in NSE",
      imgSrc: "https://storage.googleapis.com/5paisa-prod-storage/files/market-guide/How%20Can%20You%20Trade%20Commodity%20Online.png",
      path: "/commodity",
    },
    {
      title: "Agri Commodity",
      description:
        "The MCX Trading Tips Services Includes Intraday & Positional Gold, Silver, Crude, Zinc, NG, Copper, Etc Trading Advice Listed in MCX.",
      imgSrc: "https://inc42.com/cdn-cgi/image/quality=75/https://asset.inc42.com/2020/12/feature-2020-12-11T170851.496.jpg",
      path: "/agri/ncdex",
    },
    {
      title: "Forex",
      description:
        "The NCDEX Trading Tips Services Includes Intraday & Positional Zeera, Dhaniya, Chana, Turmeric, SoyaBean, Etc Trading Advice",
      imgSrc: "https://businesspost.ng/wp-content/uploads/2023/10/Successful-Forex-Traders.jpeg",
      path: "/forex/forex",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-7xl p-5 mx-auto py-10">
      {tipsData.map((tip, index) => (
        <Link
          to={`/trader${tip.path}`}
          key={index}
          className="flex items-center relative bg-white rounded-md shadow-md overflow-hidden transition-transform transform hover:scale-105"
        >
          {/* Image Section */}
          <div className="relative hidden lg:block">
            <img
              src={tip.imgSrc}
              alt={tip.title}
              className="w-32 h-32 object-cover ml-4 rounded-lg"
            />
          </div>

          {/* Card Section */}
          <div className="group bg-white hover:bg-red-600 text-gray-800 hover:text-white rounded-md shadow-md overflow-hidden transition-all duration-300 flex-1 px-5 py-3">
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 group-hover:text-white">
                {tip.title}
              </h3>
              <div className="h-1 bg-yellow-500 w-12 mb-4"></div>
              <p className="text-base group-hover:text-white">
                {tip.description}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TradingTips;
