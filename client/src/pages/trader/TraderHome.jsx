import React from "react";
import SubNav from "../../components/trader/comman/SubNav";
import TraderNavbar from "../../components/trader/comman/TraderNavbar";
import Slider from "../../components/core/home/Slider";
import WeOffer from "../../components/trader/core/home/WeOffer";
import TradingTips from "../../components/trader/core/home/TradingTips";
import WhoWeAre from "../../components/trader/core/home/WhoWeAre";
import ScrollingBanner from "./ScrollingBanner";

const TraderHome = () => {
  return (
    <div>
      <SubNav />
      <TraderNavbar />
      <Slider />
      <WeOffer />
      <TradingTips />
      <WhoWeAre />
      <ScrollingBanner />
    </div>
  );
};

export default TraderHome;
