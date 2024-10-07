import React, { useState, useEffect } from "react";
import axios from "axios";

const StockTicker = () => {
  const [stockData, setStockData] = useState([]);
  const [topSharesData, setTopSharesData] = useState([]);
  const [commoditiesData, setCommoditiesData] = useState([]);
  const [goldFuturesData, setGoldFuturesData] = useState([]); // New state for Gold Futures
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

  const commoditiesTickers = [
    "XAUUSD", // Gold
    "BRENT", // Brent Crude Oil
    "WTI", // WTI Crude Oil
    "NG", // Natural Gas
    "SI", // Silver
  ];

  // New list for Gold Futures tickers
  const goldFuturesTickers = [
    "GC=F", // Gold Futures
    "CL=F", // Crude Oil Futures
    "BRN=F", // Brent Crude Futures
    "NG=F", // Natural Gas Futures
    "SI=F", // Silver Futures
  ];

  useEffect(() => {
    const fetchPopularStockData = async () => {
      try {
        const promises = popularTickers.map((ticker) =>
          axios.get(
            `https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${API_KEY}`
          )
        );

        const results = await Promise.all(promises);
        const parsedData = results.map((result, index) => {
          const latestData = result.data;
          return {
            ticker: popularTickers[index],
            price: latestData ? `$${latestData.c}` : "N/A",
            change: latestData
              ? ((latestData.c - latestData.o) / latestData.o) * 100
              : "N/A",
            high: latestData ? `$${latestData.h}` : "N/A",
            low: latestData ? `$${latestData.l}` : "N/A",
          };
        });

        setStockData(parsedData);
      } catch (error) {
        console.error("Error fetching popular stock data:", error);
      }
    };

    const fetchTopSharesData = async () => {
      try {
        const promises = topSharesTickers.map((ticker) =>
          axios.get(
            `https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${API_KEY}`
          )
        );

        const results = await Promise.all(promises);
        const parsedData = results.map((result, index) => {
          const latestData = result.data;
          return {
            ticker: topSharesTickers[index],
            price: latestData ? `$${latestData.c}` : "N/A",
            change: latestData
              ? ((latestData.c - latestData.o) / latestData.o) * 100
              : "N/A",
            high: latestData ? `$${latestData.h}` : "N/A",
            low: latestData ? `$${latestData.l}` : "N/A",
          };
        });

        setTopSharesData(parsedData);
      } catch (error) {
        console.error("Error fetching top shares data:", error);
      }
    };

    const fetchCommoditiesData = async () => {
      try {
        const promises = commoditiesTickers.map((ticker) =>
          axios.get(
            `https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${API_KEY}`
          )
        );

        const results = await Promise.all(promises);
        const parsedData = results.map((result, index) => {
          const latestData = result.data;
          return {
            ticker: commoditiesTickers[index],
            price: latestData ? `$${latestData.c}` : "N/A",
            change: latestData
              ? ((latestData.c - latestData.o) / latestData.o) * 100
              : "N/A",
            high: latestData ? `$${latestData.h}` : "N/A",
            low: latestData ? `$${latestData.l}` : "N/A",
          };
        });

        setCommoditiesData(parsedData);
      } catch (error) {
        console.error("Error fetching commodities data:", error);
      }
    };

    const fetchGoldFuturesData = async () => {
      try {
        const promises = goldFuturesTickers.map((ticker) =>
          axios.get(
            `https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${API_KEY}`
          )
        );

        const results = await Promise.all(promises);
        const parsedData = results.map((result, index) => {
          const latestData = result.data;
          return {
            ticker: goldFuturesTickers[index],
            price: latestData ? `$${latestData.c}` : "N/A",
            change: latestData
              ? ((latestData.c - latestData.o) / latestData.o) * 100
              : "N/A",
            high: latestData ? `$${latestData.h}` : "N/A",
            low: latestData ? `$${latestData.l}` : "N/A",
          };
        });

        setGoldFuturesData(parsedData);
      } catch (error) {
        console.error("Error fetching Gold Futures data:", error);
      }
    };

    fetchPopularStockData();
    fetchTopSharesData();
    fetchCommoditiesData();
    fetchGoldFuturesData(); // Fetch Gold Futures data
  }, [API_KEY]);

  const formatChange = (change) => {
    const color = change >= 0 ? "text-green-500" : "text-red-500";
    return <span className={color}>{change.toFixed(2)}%</span>;
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl text-white font-bold text-center mb-6">
        Live Market Prices
      </h1>

      {/* Tabs */}
      <div className="flex justify-around mb-4">
        <button
          className={`py-2 px-4 rounded ${
            selectedTab === "popular" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setSelectedTab("popular")}
        >
          Popular
        </button>
        <button
          className={`py-2 px-4 rounded ${
            selectedTab === "shares" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setSelectedTab("shares")}
        >
          Shares
        </button>
        <button
          className={`py-2 px-4 rounded ${
            selectedTab === "commodities"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setSelectedTab("commodities")}
        >
          Commodities
        </button>
        <button
          className={`py-2 px-4 rounded ${
            selectedTab === "goldFutures"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setSelectedTab("goldFutures")}
        >
          Gold Futures
        </button>
      </div>

      {/* Tab Content */}
      {selectedTab === "popular" ? (
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-left">
              <th className="py-3 px-4 border-b">Ticker Name</th>
              <th className="py-3 px-4 border-b">Price</th>
              <th className="py-3 px-4 border-b">Change</th>
              <th className="py-3 px-4 border-b">High/Low</th>
            </tr>
          </thead>
          <tbody>
            {stockData.map((stock, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{stock.ticker}</td>
                <td className="py-2 px-4 border-b">{stock.price}</td>
                <td className="py-2 px-4 border-b">
                  {formatChange(stock.change)}
                </td>
                <td className="py-2 px-4 border-b">
                  {stock.high} / {stock.low}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : selectedTab === "shares" ? (
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-left">
              <th className="py-3 px-4 border-b">Ticker Name</th>
              <th className="py-3 px-4 border-b">Price</th>
              <th className="py-3 px-4 border-b">Change</th>
              <th className="py-3 px-4 border-b">High/Low</th>
            </tr>
          </thead>
          <tbody>
            {topSharesData.map((stock, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{stock.ticker}</td>
                <td className="py-2 px-4 border-b">{stock.price}</td>
                <td className="py-2 px-4 border-b">
                  {formatChange(stock.change)}
                </td>
                <td className="py-2 px-4 border-b">
                  {stock.high} / {stock.low}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : selectedTab === "commodities" ? (
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-left">
              <th className="py-3 px-4 border-b">Commodity Name</th>
              <th className="py-3 px-4 border-b">Price</th>
              <th className="py-3 px-4 border-b">Change</th>
              <th className="py-3 px-4 border-b">High/Low</th>
            </tr>
          </thead>
          <tbody>
            {commoditiesData.map((commodity, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{commodity.ticker}</td>
                <td className="py-2 px-4 border-b">{commodity.price}</td>
                <td className="py-2 px-4 border-b">
                  {formatChange(commodity.change)}
                </td>
                <td className="py-2 px-4 border-b">
                  {commodity.high} / {commodity.low}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : selectedTab === "goldFutures" ? (
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-left">
              <th className="py-3 px-4 border-b">Gold Futures Name</th>
              <th className="py-3 px-4 border-b">Price</th>
              <th className="py-3 px-4 border-b">Change</th>
              <th className="py-3 px-4 border-b">High/Low</th>
            </tr>
          </thead>
          <tbody>
            {goldFuturesData.map((future, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{future.ticker}</td>
                <td className="py-2 px-4 border-b">{future.price}</td>
                <td className="py-2 px-4 border-b">
                  {formatChange(future.change)}
                </td>
                <td className="py-2 px-4 border-b">
                  {future.high} / {future.low}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};

export default StockTicker;
