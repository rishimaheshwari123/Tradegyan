import React from "react";
import { Link } from "react-router-dom";

const Helps = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto p-5 grid lg:grid-cols-2">
        <div className="relative">
          {/* <div className="lg:min-h-[120px] min-h-[90px] absolute lg:min-w-[120px] min-w-[90px] border-t-[30px] border-r-[30px] max-w-[120px] lg:border-t-[40px] lg:border-r-[40px] border-[#f5c300] lg:top-[0px] lg:right-[100px] top-[10px] right-[10px]"></div>

          <div className="lg:min-h-[120px] min-h-[90px] absolute lg:min-w-[120px] min-w-[90px] max-w-[120px] lg:border-b-[40px] lg:border-l-[40px] border-b-[30px] border-l-[30px] border-[#f5c300] lg:-bottom-[20px] lg:-left-[20px] bottom-0 left-0"></div> */}
          <img
            // src="https://d10t455z86w23i.cloudfront.net/public/uploads/editor-images/images/sounding-board-image-min.jpg"
            src="https://img.freepik.com/free-photo/chart-analysis_1098-15090.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726790400&semt=ais_hybrid"
            alt="Sounding Board"
            className="w-[90%] h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="lg:text-5xl text-3xl font-semibold text-gray-300">
            Elevate Your Investment Strategy
          </h2>
          <p className="text-xl text-gray-400">
            Gain clarity and confidence with our expert insights and research.
          </p>
          <Link className="w-fit bg-[#260062] rounded-full px-5 py-3 font-bold hover:opacity-90 transition duration-300 text-white">
            Explore More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Helps;
