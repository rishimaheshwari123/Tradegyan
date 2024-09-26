import React from "react";
import { Link } from "react-router-dom";

const Helps = () => {
  return (
    <div className="my-5">
      <div className="max-w-7xl mx-auto p-5 grid lg:grid-cols-2 ">
        <div className=" relative"> 

        <div className=" lg:min-h-[120px] min-h-[90px] absolute lg:min-w-[120px] min-w-[90px] lg:min-w-[120px] min-w-[90px]  m border-t-[30px] border-r-[30px]  max-w-[120px] lg:border-t-[40px] lg:border-r-[40px] border-[#f5c300] lg:top-[0px] lg:right-[100px] top-[10px] right-[10px]"></div>

<div className=" lg:min-h-[120px] min-h-[90px] absolute lg:min-w-[120px]  min-w-[90px]  max-w-[120px] lg:border-b-[40px] lg:border-l-[40px] border-b-[30px] border-l-[30px]  border-[#f5c300] lg:-bottom-[20px] lg:-left-[20px] bottom-0 left-0"></div>
          <img
            src="https://d10t455z86w23i.cloudfront.net/public/uploads/editor-images/images/sounding-board-image-min.jpg"
            alt="not foudn"
          />
        </div>

        <div className="flex flex-col gap-5">
          <p className="lg:text-5xl  text-2xl font-semibold">
            It helps to have a sounding board
          </p>
          <p className="text-xl">Better investing through research</p>
          <Link className="w-fit bg-[#efcc41] rounded-full px-5 py-3 font-bold hover:opacity-90 cursor-pointer">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Helps;
