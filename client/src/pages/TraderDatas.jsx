import React, { useEffect, useState } from 'react';
import Notification from '../components/core/home/Notification';
import Navbar from '../components/comman/Navbar';
import { useParams } from 'react-router-dom';
import { maindata } from '../data/traderData'; // Import your data

function TraderDatas() {
  const { name } = useParams(); // Get the name (equity, commodity, etc.) from the URL
  const [traderData, setTraderData] = useState([]); // State to store the relevant data

  useEffect(() => {
    // Check if the maindata has the key for the name from URL
    if (maindata[name]) {
      setTraderData(maindata[name]); // Set the corresponding array in state
    } else {
      console.log(`No data found for: ${name}`);
    }
  }, [name]); // Re-run effect if name changes

  return (
    <>
        {/* <Notification /> */}
      <Navbar />

      <div className="mt-[50px]">
        <div className="flex  flex-col justify-center items-center w-[90%] md:w-[80%] mx-auto text-center mb-10">
          <h4 className="text-5xl text-blue-500 font-semibold font-serif mb-6">Intraday</h4>
          <p className="text-lg my-3 leading-relaxed text-gray-800">
            Intraday Trading requires frequent buying and selling of stocks
            within the same day. CapitalVia provides Best Intraday Trading
            Strategies for aggressive traders. Our Intraday Trading services are
            designed to help you make the most of the market movements
            throughout the day.
          </p>
          <img
            src="https://cdn.prod.website-files.com/591b46f1eacfad0f37b73b0f/5e576ab6eb561c77911d2543_5e0091c510bfa778489f4ddb_intraday-p-500-min.png"
            alt="Intraday Trading"
            className="rounded-xl shadow-lg w-full md:w-[70%] lg:w-[50%] object-cover"
          />
        </div>

        <div className="flex justify-center w-screen min-h-[50vh] bg-gray-900 py-10 px-4">
          {traderData.length > 0 ? (
            <div className="w-full max-w-[1200px]">
              <h1 className="text-4xl text-center font-bold mb-6 text-blue-400">{name.toUpperCase()} Services</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {traderData.map((item, index) => (
                  <a key={index} href={item.path} className="block">
                    <button
                      className="bg-gradient-to-r from-blue-500 to-red-500 text-white py-4 px-6 rounded-lg font-semibold transition-transform transform hover:scale-105 hover:from-blue-600 hover:to-red-600 w-full"
                    >
                      {item.name}
                    </button>
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-white text-lg">No data available for {name}.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default TraderDatas;
