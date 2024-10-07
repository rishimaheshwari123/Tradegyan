import React from "react";
// Import the image if needed, otherwise, you can keep the placeholder URL
import image from "../../../assets/12.png";

const Banner = () => {
  return (
    <div className="min-h-[300px] w-full lg:-mb-[10px] p-4 mt-10 ">
      <div className="grid lg:grid-cols-2 w-[80%] mx-auto items-center justify-between text-white">
        <div className="flex flex-col justify-start gap-6">
          <p className="text-3xl font-bold lg:w-[60%] text-gray-300">
            Unlock Your Financial Potential with Our Expertise!
          </p>
          <p className="text-xl text-[#0afc3e]">
            Join thousands who trust us as their premier financial partner.
          </p>
          <div className="flex justify-start lg:justify-start">
            <button className="p-4 bg-[#F5C300] rounded-full font-bold text-black">
              Get Started Today
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            // src="https://i.pinimg.com/736x/eb/cb/17/ebcb174d345938d30e8ec9b75ed17686.jpg"
            src={image}
            alt="Banner"
            className="w-full h-auto lg:max-h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
