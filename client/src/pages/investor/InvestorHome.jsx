import React from "react";
import Slider from "../../components/investor/core/home/Slider";
import Service from "../../components/investor/core/home/Service";
import WhyWorkWithUs from "../../components/investor/core/home/WhyWorkWithUs";
import LastSlider from "../../components/investor/core/home/LastSlider";
import InvestorNavbar from "../../components/investor/comman/InvestorNavbar";

const InvestorHome = () => {
  return (
    <div>
      <InvestorNavbar />
      <Slider />
      <Service />
      <WhyWorkWithUs />
      <LastSlider />
    </div>
  );
};

export default InvestorHome;
