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
    <div className="w-full overflow-hidden bg-gray-100 py-2">
      <div className="flex animate-marquee whitespace-nowrap">
        {stocks.map((stock, index) => (
          <div
            key={index}
            className="mx-4 flex-shrink-0 text-xl font-semibold text-black"
          >
            {stock.name}: <span className="text-green-600">{stock.price}</span>
          </div>
        ))}
        {/* Repeat the list to create the infinite scroll effect */}
        {stocks.map((stock, index) => (
          <div
            key={index + stocks.length} // Avoid duplicate keys
            className="mx-4 flex-shrink-0 text-xl font-semibold text-black"
          >
            {stock.name}: <span className="text-green-600">{stock.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LivePrice;
