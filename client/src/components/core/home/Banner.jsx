import React from "react";
import image from "../../../assets/bannersec.jpg";
const Banner = () => {
  return (
    <div className="bg-[#d8d6e4] min-h-[300px] w-full -mb-[10px] ">
      <div className=" flex w-[80%] mx-auto items-center justify-between text-[#323232]">
        <div>
          <div className=" flex flex-col justify-start gap-6">
            <p className=" text-3xl font-bold lg:w-[60%] ">
              Experience our award winning service & support!
            </p>
            <p className=" text-xl">
              One of the Most Awarded Financial Service Provider in the Region
            </p>

            <div className=" flex   ">
              <button className="p-4 bg-[#f5c300] rounded-full font-bold">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div>
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
