import React from "react";
import image from "../../../assests/bannersec.jpg";

const Banner = () => {
  return (
    <div className="bg-[#d8d6e4] min-h-[300px] w-full lg:-mb-[10px] p-4">
      <div className="grid lg:grid-cols-2 w-[80%] mx-auto items-center justify-between text-[#323232]">
        <div className="flex flex-col justify-start gap-6">
          <p className="text-3xl font-bold lg:w-[60%]">
            Experience our award-winning service & support!
          </p>
          <p className="text-xl">
            One of the Most Awarded Financial Service Providers in the Region
          </p>

          <div className="flex justify-start lg:justify-start">
            <button className="p-4 bg-[#f5c300] rounded-full font-bold">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={image}
            alt="Banner"
            className="w-full h-auto lg:max-h-[400px] object-cover" // Adjust the max height for larger screens
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
