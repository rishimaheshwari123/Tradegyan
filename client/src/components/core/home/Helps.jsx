import React from "react";
import { Link } from "react-router-dom";

const Helps = () => {
  return (
    <div className="my-5">
      <div className="max-w-7xl mx-auto p-5 grid lg:grid-cols-2 ">
        <div>
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
