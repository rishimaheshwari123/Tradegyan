import React from "react";

const WeOffer = () => {
  return (
    <div>
      <div className="bg-gray-50 py-12 px-5">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
          <div className="flex items-center mb-6 lg:mb-0">
            <h2 className="font-bold text-2xl lg:text-3xl text-gray-800 mr-4 text-center lg:text-right">
              WE OFFER <br /> ADVISORY SERVICES
            </h2>
            <div className="border-l-4 ml-2 border-teal-500 h-16 hidden lg:flex" />
          </div>
          <p className=" lg:text-sm   lg:text-left lg:ml-6 max-w-2xl text-[13px]">
          A Investment advisory company assisting investors diversify their
            investments and reap earnings through its profound industry
            expertise and a keen eye for detail that enables it to predict the
            market flow in an efficient manner. For more information, visit{" "}
            <a
              href="https://tradegyan.co"
              className=" underline text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              our website TradeGyan Solution
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeOffer;
