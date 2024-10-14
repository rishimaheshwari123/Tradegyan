import React, { useState, useEffect } from "react";
import axios from "axios";

const StockTicker = () => {
  const [stockData, setStockData] = useState([]);
  const [topSharesData, setTopSharesData] = useState([]);
  const [commoditiesData, setCommoditiesData] = useState([]);
  const [goldFuturesData, setGoldFuturesData] = useState([]);
  const [selectedTab, setSelectedTab] = useState("popular");

  const API_KEY = "cs1sq61r01qsperufq1gcs1sq61r01qsperufq20";

  const popularTickers = [
    "NVDA",
    "AAPL",
    "AMZN",
    "TSLA",
    "MSFT",
    "GOOGL",
    "FB",
    "NFLX",
  ];

  const topSharesTickers = [
    "AAPL",
    "MSFT",
    "GOOGL",
    "AMZN",
    "NVDA",
    "TSLA",
    "BRK.B",
    "JNJ",
  ];

  const commoditiesTickers = ["XAUUSD", "BRENT", "WTI", "NG", "SI"];

  const goldFuturesTickers = ["GC=F", "CL=F", "BRN=F", "NG=F", "SI=F"];

  useEffect(() => {
    // Fetch functions as before
    // ...
  }, [API_KEY]);

  const formatChange = (change) => {
    const color = change >= 0 ? "text-green-500" : "text-red-500";
    return <span className={color}>{change.toFixed(2)}%</span>;
  };

  return (
    <div className="max-w-7xl mx-auto py-4 px-2 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl text-white font-bold text-center mb-4 sm:mb-6">
        Live Market Prices
      </h1>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center sm:justify-around mb-4 space-y-2 sm:space-y-0">
        {["popular", "shares", "commodities", "goldFutures"].map((tab) => (
          <button
            key={tab}
            className={`py-2 px-3 sm:px-4 rounded ${
              selectedTab === tab ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab === "popular"
              ? "Popular"
              : tab === "shares"
              ? "Shares"
              : tab === "commodities"
              ? "Commodities"
              : "Gold Futures"}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="overflow-x-auto">
        {selectedTab === "popular" ? (
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-200 text-gray-700 text-left">
                <th className="py-2 sm:py-3 px-2 sm:px-4 border-b">Ticker</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 border-b">Price</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 border-b">Change</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 border-b">High/Low</th>
              </tr>
            </thead>
            <tbody>
              {stockData.map((stock, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-1 sm:py-2 px-2 sm:px-4 border-b">
                    {stock.ticker}
                  </td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4 border-b">
                    {stock.price}
                  </td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4 border-b">
                    {formatChange(stock.change)}
                  </td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4 border-b">
                    {stock.high} / {stock.low}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : selectedTab === "shares" ? (
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-200 text-gray-700 text-left">
                <th className="py-2 sm:py-3 px-2 sm:px-4 border-b">Ticker</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 border-b">Price</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 border-b">Change</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 border-b">High/Low</th>
              </tr>
            </thead>
            <tbody>
              {topSharesData.map((stock, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-1 sm:py-2 px-2 sm:px-4 border-b">
                    {stock.ticker}
                  </td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4 border-b">
                    {stock.price}
                  </td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4 border-b">
                    {formatChange(stock.change)}
                  </td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4 border-b">
                    {stock.high} / {stock.low}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : selectedTab === "commodities" ? (
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-200 text-gray-700 text-left">
                <th className="py-2 sm:py-3 px-2 sm:px-4 border-b">
                  Commodity
                </th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 border-b">Price</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 border-b">Change</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 border-b">High/Low</th>
              </tr>
            </thead>
            <tbody>
              {commoditiesData.map((commodity, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-1 sm:py-2 px-2 sm:px-4 border-b">
                    {commodity.ticker}
                  </td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4 border-b">
                    {commodity.price}
                  </td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4 border-b">
                    {formatChange(commodity.change)}
                  </td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4 border-b">
                    {commodity.high} / {commodity.low}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : selectedTab === "goldFutures" ? (
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-200 text-gray-700 text-left">
                <th className="py-2 sm:py-3 px-2 sm:px-4 border-b">Futures</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 border-b">Price</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 border-b">Change</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 border-b">High/Low</th>
              </tr>
            </thead>
            <tbody>
              {goldFuturesData.map((future, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-1 sm:py-2 px-2 sm:px-4 border-b">
                    {future.ticker}
                  </td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4 border-b">
                    {future.price}
                  </td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4 border-b">
                    {formatChange(future.change)}
                  </td>
                  <td className="py-1 sm:py-2 px-2 sm:px-4 border-b">
                    {future.high} / {future.low}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  );
};

export default StockTicker;
