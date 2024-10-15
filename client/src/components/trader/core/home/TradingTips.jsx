import React from "react";
import { Link } from "react-router-dom";

const TradingTips = () => {
  const tipsData = [
    {
      title: "Equity Trading ",
      description:
        "The Equity Trading Tips Services Includes Intraday & Positional Stock Trading Advice, BTST For Stocks Listed in NSE And BSE",
      imgSrc: "https://tradegyan.co/wp-content/uploads/2019/07/1-1.jpg", // Replace with actual image path
     path:"/equity" 
 },
    {
      title: "Commodity",
      description:
        "The Derivative Trading Tips Services Includes Intraday & Positional Future & Option, BTST Trading Advice, For Stocks Listed in NSE",
      imgSrc: "https://www.tradegyan.co/wp-content/uploads/2019/07/3.jpg", // Replace with actual image path
      path:"/commodity" 
   
    },
    {
      title: "Agri Commodity",
      description:
        "The MCX Trading Tips Services Includes Intraday & Positional Gold, Silver, Crude, Zinc, NG, Copper, Etc Trading Advice Listed in MCX.",
      imgSrc: "https://www.tradegyan.co/wp-content/uploads/2019/07/2.jpg", // Replace with actual image path
      path:"/agri/ncdex" 
   
    },
    {
      title: "Forex",
      description:
        "The NCDEX Trading Tips Services Includes Intraday & Positional Zeera, Dhaniya, Chana, Turmeric, SoyaBean, Etc Trading Advice",
      imgSrc: "https://www.tradegyan.co/wp-content/uploads/2019/07/4.jpg", // Replace with actual image path
      path:"/forex/forex" 
    
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-7xl p-5 mx-auto py-10">
      {tipsData.map((tip, index) => (
        <Link to={`/trader${tip.path}`} key={index} className="flex items-center relative">
          {/* Image Secti/${on */}
          <div className="relative hidden lg:block ">
            <img
              src={tip.imgSrc}
              alt={tip.title}
              className="w-32 h-32 object-cover ml-4"
            />
          </div>

          {/* Card Section */}
          <div className="group bg-white hover:bg-red-600 text-gray-800 hover:text-white rounded-md shadow-md overflow-hidden transition-all duration-300 lg:-ml-6 flex-1 px-5 py-3">
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
