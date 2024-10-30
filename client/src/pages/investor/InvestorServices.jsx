import React, { useEffect } from "react";
import Service from "../../components/investor/core/service/Service";
import service from "../../assets/service.png";
import { FaChevronDown } from "react-icons/fa";
import InvestorNavbar from "../../components/investor/comman/InvestorNavbar";
import Notification from "../../components/core/home/Notification";

const InvestorServices = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#inservice') {
      const element = document.getElementById('inservice');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);

  return (
    <div >
        {/* <Notification /> */}
      <InvestorNavbar />
      <div className="relative flex justify-center items-center">
        <img
          src={service}
          alt="Service"
          className="w-full max-h-[85vh] object-cover"
        />

        <div id="inservice" className="absolute flex flex-col items-center text-center" >
          <h1 className="text-4xl md:text-6xl text-white font-bold">
            Our Services
          </h1>
          <FaChevronDown className="text-white text-3xl mt-4 animate-bounce" />
        </div>
      </div>
      <Service />
    </div>
  );
};

export default InvestorServices;
