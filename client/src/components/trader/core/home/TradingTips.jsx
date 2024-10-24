import React from "react";
import { Link } from "react-router-dom";
import equity from '../../../../assets/services/quity.png'
import two from '../../../../assets/services/commodity.png'
import three from '../../../../assets/services/agri.jpg'
import four from '../../../../assets/services/forex.jpeg'
const TradingTips = () => {
  
  const tipsData = [
    {
      title: "Equity Trading",
      description:
        "The Equity Trading Tips Services Includes Intraday & Positional Stock Trading Advice, BTST For Stocks Listed in NSE And BSE",
      imgSrc:equity,
      path: "/equity",
    },
    {
      title: "Commodity",
      description:
      "The MCX Trading Tips Services Includes Intraday & Positional Gold, Silver, Crude, Zinc, NG, Copper, Etc Trading Advice Listed in MCX.",
    
      imgSrc:two,
      path: "/commodity",
    },
    {
      title: "Agri Commodity",
      description:
        "The NCDEX Trading Tips Services Includes Intraday & Positional Zeera, Dhaniya, Chana, Turmeric, SoyaBean, Etc Trading Advice",
     
      imgSrc:three,
      path: "/agri/ncdex",
    },
    {
      title: "Forex",
      description:
      "The Derivative Trading Tips Services Includes Intraday & Positional Future & Option, BTST Trading Advice, For Stocks Listed in NSE",
      imgSrc: four,
      path: "/forex/forex",
    },
  ];

  return (



      <div className="container mx-auto my-10 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tipsData.map((service, index) => (
          <div
            key={index}
            className="relative group text-white overflow-hidden"
          >
            <img
              src={service?.imgSrc}
              alt={service?.title}
              className="w-full h-60 sm:h-72 lg:h-96 object-cover group-hover:opacity-80 transition-opacity duration-500"
            />
            {/* Hover content */}
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-center drop-shadow-lg">
                {service?.title}
              </h3>
              <p className="text-xs sm:text-sm mb-4 text-center drop-shadow-lg">
                {service?.description}
              </p>
              <Link
             
              to={`/trader${service.path}`}
                className="mt-4 text-xs sm:text-sm text-white border border-white py-2 px-4 rounded hover:bg-white hover:text-black transition-all drop-shadow-lg"
              >
                KNOW MORE
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradingTips;
