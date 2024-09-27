import React from "react";

const LivePrice = () => {
  // Sample stock data
  const stocks = [
    { name: "Apple", price: "$150" },
    { name: "Google", price: "$2800" },
    { name: "Tesla", price: "$700" },
    { name: "Amazon", price: "$3300" },
    { name: "Microsoft", price: "$290" },
    { name: "Meta", price: "$340" },
  ];

  return (
    <div className="w-full overflow-hidden py-2 bg-gradient-to-r from-[#62000f] to-[#8a2a2a]"> {/* Maroon gradient background */}
      <div className="flex animate-marquee whitespace-nowrap">
        {stocks.map((stock, index) => (
          <div
            key={index}
            className="mx-4 flex-shrink-0 text-xl font-semibold text-white" 
          >
            {stock.name}: <span className="text-[#efcc41]">{stock.price}</span> {/* Golden price highlight */}
          </div>
        ))}
        {/* Repeat the list to create the infinite scroll effect */}
        {stocks.map((stock, index) => (
          <div
            key={index + stocks.length} // Avoid duplicate keys
            className="mx-4 flex-shrink-0 text-xl font-semibold text-white"
          >
            {stock.name}: <span className="text-[#efcc41]">{stock.price}</span> {/* Golden price highlight */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LivePrice;
