import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { useLocation } from "react-router-dom";

const Notification = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(false);
  };

  useEffect(() => {
    setToggle(true);
  }, []);


  const location = useLocation(); // Get the current URL path

  // Check if the current path includes "/admin"
  if (location.pathname.includes("/admin")) {
    return null; // Do not render the footer if the URL contains "/admin"
  }

  return (
    toggle && (
      <div className="bg-black text-white border-b-2 border-white">
        <div className="relative max-w-7xl mx-auto p-5 md:p-5">
          <p className="lg:text-sm md:text-sm text-[12px]">
            Investment & Trading In Securities Market Is Always
            Subjected To Market Risks. Trade Gyan Solutions. ( Investment
            Advisor) Do Not Provide Any Assured/ Guaranteed Return/Profit
            services, Any Profit Sharing Services, And Services Which Are Not
            Mention In Company Website, Please Trade Only Company SMS With
            Proper Stop Loss. We did not ask for Demat details to anyone. Please
            call us if anyone provides a talk about these services. 7771004879
          </p>
          <span
            className="absolute top-2 right-0 lg:-right-2 cursor-pointer p-1 text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition duration-300"
            onClick={handleToggle}
          >
            <ImCross />
          </span>
        </div>
      </div>
    )
  );
};

export default Notification;
