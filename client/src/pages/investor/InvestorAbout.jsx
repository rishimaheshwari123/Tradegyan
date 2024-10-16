import React from "react";
import { FaChevronDown } from "react-icons/fa";
import about from "../../assets/about.png";
import AboutGrid from "../../components/investor/core/about/AboutGrid";
import Slider from "../../components/investor/core/about/Slider";
import InvestorNavbar from "../../components/investor/comman/InvestorNavbar";
import Notification from "../../components/core/home/Notification";
const InvestorAbout = () => {
  return (
    <div>
        {/* <Notification /> */}
      <InvestorNavbar />
      <div className="relative flex justify-center items-center">
        <img
          src={about}
          alt="Service"
          className="w-full max-h-[85vh] object-cover"
        />

        <div className="absolute flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold">
            About Us
          </h1>
          <br />
          <br />
          <br />
          <FaChevronDown className="text-white text-3xl mt-4 animate-bounce" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-center max-w-5xl mx-auto p-5">
        <img
          src="https://www.dilzer.net/images/about-us/mission-statement.png"
          alt="Mission Statement"
          className="w-54 h-52 mb-4"
        />
        <p className="font-bold text-2xl mb-2">Mission Statement</p>
        <p className="text-xl ">
          "We will enable our clients to achieve their goals by providing the
          best in financial guidance, and maintaining the strictest possible
          standards with close and interactive engagement.”
        </p>
      </div>
      <br />
      <br />
      <AboutGrid />
      <br />
      <br />
      <Slider />
      <br />
      <br />
      <br />
    </div>
  );
};

export default InvestorAbout;
