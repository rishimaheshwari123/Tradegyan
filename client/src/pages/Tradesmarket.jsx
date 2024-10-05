import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import axios from 'axios';

const StockTable = () => {
  const [stocks, setStocks] = useState([]);
  
  const API_KEY = 'A1HYY3ZKU42PISYW'; // Your Alpha Vantage API key

  // Tickers for Popular in Global Market
  const tickers = ['AAPL', 'GOOGL', 'TSLA', 'AMZN', 'MSFT']; // Example tickers

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const promises = tickers.map((ticker) =>
          axios.get(`https://www.alphavantage.co/query`, {
            params: {
              function: 'GLOBAL_QUOTE',
              symbol: ticker,
              apikey: API_KEY
            }
          })
        );
        const results = await Promise.all(promises);
        const stockData = results.map((result) => {
          const quote = result.data['Global Quote'];
          return {
            ticker: quote['01. symbol'],
            price: quote['05. price'],
            change: quote['10. change percent'],
            high: quote['03. high'],
            low: quote['04. low'],
          };
        });
        setStocks(stockData);
      } catch (error) {
        console.error('Error fetching stock data', error);
      }
    };

    fetchStockData();
  }, [tickers]);

  // Function to render the change percentage with colors and icons
  const renderChange = (change) => {
    const changeNum = parseFloat(change);
    if (changeNum > 0) {
      return (
        <span className="text-green-500 flex items-center">
          <FaArrowUp className="mr-1" /> {changeNum.toFixed(2)}%
        </span>
      );
    } else if (changeNum < 0) {
      return (
        <span className="text-red-500 flex items-center">
          <FaArrowDown className="mr-1" /> {Math.abs(changeNum).toFixed(2)}%
        </span>
      );
    } else {
      return <span>{changeNum.toFixed(2)}%</span>;
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">Popular in Global Market</h2>

      <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-3 px-6 text-left">Ticker Name</th>
            <th className="py-3 px-6 text-left">Price</th>
            <th className="py-3 px-6 text-left">Change</th>
            <th className="py-3 px-6 text-left">High/Low</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => (
            <tr
              key={index}
              className="border-b hover:bg-gray-100 transition duration-150 ease-in-out"
            >
              <td className="py-3 px-6">{stock.ticker}</td>
              <td className="py-3 px-6">${parseFloat(stock.price).toFixed(2)}</td>
              <td className="py-3 px-6">{renderChange(stock.change)}</td>
              <td className="py-3 px-6">
                ${parseFloat(stock.high).toFixed(2)} / ${parseFloat(stock.low).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
