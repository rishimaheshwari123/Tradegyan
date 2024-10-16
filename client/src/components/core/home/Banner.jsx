import React from "react";
// Import the image if needed, otherwise, you can keep the placeholder URL
import image from "../../../assets/12.png";

const Banner = () => {
  return (
    <div className="min-h-[300px] w-full lg:-mb-[10px] p-4 mt-10 text-center lg:text-start">
      <div className="grid lg:grid-cols-2 w-[80%] mx-auto items-center justify-between text-black"> {/* Changed text color to black */}
        <div className="flex flex-col justify-start gap-6">
          <p className="text-3xl font-bold lg:w-[60%] text-gray-700"> {/* Changed text color to gray */}
            Unlock Your Financial Potential with Our Expertise!
          </p>
          <p className="text-xl text-gray-600"> {/* Changed text color to gray */}
            Join thousands who trust us as their premier financial partner.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="lg:p-4 p-2 bg-[#F5C300] rounded-full font-bold text-black text-[14px] lg:text-xl">
              Get Started Today
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={image}
            alt="An illustrative image representing financial growth"
            className="w-full h-auto lg:max-h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
