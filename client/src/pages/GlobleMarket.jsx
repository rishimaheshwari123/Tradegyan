import React, { useState, useEffect } from "react";
import axios from "axios";

const StockTicker = () => {
  const [stockData, setStockData] = useState([]);

  const API_KEY = "6LOFINK3ZQVHTK3P";
  // Updated list of popular tickers
  const tickers = [
    "NVDA",
    "AAPL",
    "AMZN",
    "TSLA",
    "MSFT",
    "GOOGL",
    "FB",
    "NFLX",
  ];

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const promises = tickers.map((ticker) =>
          axios.get(
            `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=5min&apikey=${API_KEY}`
          )
        );

        const results = await Promise.all(promises);
        console.log(results.data);

        // Parse the response data from the results array
        const parsedData = results.map((result, index) => {
          const timeSeries = result.data["Time Series (5min)"];
          if (!timeSeries) return null; // Handle case where API returns no data

          const latestTime = Object.keys(timeSeries)[0]; // Get the most recent time
          const latestData = timeSeries[latestTime]; // Get data for the latest time

          return {
            ticker: tickers[index],
            price: latestData ? latestData["1. open"] : "N/A",
            high: latestData ? latestData["2. high"] : "N/A",
            low: latestData ? latestData["3. low"] : "N/A",
            change: latestData
              ? ((latestData["4. close"] - latestData["1. open"]) /
                  latestData["1. open"]) *
                100
              : "N/A",
          };
        });

        setStockData(parsedData.filter((data) => data !== null));
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    fetchStockData();
  }, []);

  const formatChange = (change) => {
    const color = change >= 0 ? "text-green-500" : "text-red-500";
    return <span className={color}>{change.toFixed(2)}%</span>;
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-6">Live Stock Prices</h1>
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
              <td className="py-2 px-4 border-b">${stock.price}</td>
              <td className="py-2 px-4 border-b">
                {formatChange(stock.change)}
              </td>
              <td className="py-2 px-4 border-b">
                H: ${stock.high} L: ${stock.low}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTicker;
