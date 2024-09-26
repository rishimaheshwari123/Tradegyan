import React from "react";

const WeOffer = () => {
  return (
    <div>
      <div>
        <div className="bg-gray-50 py-12 px-5">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
            <div className="flex items-center mb-6 lg:mb-0">
              <h2 className="font-bold text-2xl lg:text-3xl text-gray-800 mr-4 text-center lg:text-right">
                WE OFFER <br /> ADVISORY SERVICES
              </h2>
              <div className="border-l-4 ml-2 border-teal-500 h-16 hidden lg:flex" />
            </div>
            {/* <div className="border-r-4 border-black h-20"></div> */}
            <p className="text-lg lg:text-sm text-red-600 text-center lg:text-left lg:ml-6 max-w-2xl">
              Trade Gyan Solutions is an investment advisory in India. The
              company provides recommendations for stocks cash &amp; F&amp;O
              traded in NSE &amp; BSE, including bullions, metals, and agro
              commodities traded in MCX &amp; NCDEX. For more information, visit{" "}
              <a
                href="https://example.com"
                className="text-teal-500 underline hover:text-teal-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                our website
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeOffer;
