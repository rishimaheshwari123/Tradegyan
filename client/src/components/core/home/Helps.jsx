import React from "react";
import { Link } from "react-router-dom";

const Helps = () => {
  return (
    <div className="">
      <div className="lg:max-w-7xl mx-auto p-5 grid lg:grid-cols-2 ">
        <div className="relative">
          <img
            src="https://img.freepik.com/free-photo/chart-analysis_1098-15090.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726790400&semt=ais_hybrid"
            alt="Sounding Board"
            className="w-[90%] h-auto rounded-lg shadow-lg mx-auto lg:mx-0"
          />
        </div>

        <div className="flex flex-col gap-5 text-center lg:text-start items-center lg:items-start">
          <h2 className="lg:text-5xl text-3xl font-semibold text-black">
            Elevate Your Investment Strategy
          </h2>
          <p className="text-xl text-black">
            Gain clarity and confidence with our expert insights and research.
          </p>
          <Link to={"/investor"} className="w-fit bg-[#260062] rounded-full px-5 py-3 font-bold hover:opacity-90 transition duration-300 text-white">
            Explore More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Helps;
