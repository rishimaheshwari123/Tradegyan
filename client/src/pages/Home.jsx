import React from "react";
import Navbar from "../components/comman/Navbar";
import Slider from "../components/core/home/Slider";
import LivePrice from "../components/core/home/LivePrice";
import Investment from "../components/core/home/Investment";
import Opportunities from "../components/core/home/Opportunities";
import Helps from "../components/core/home/Helps";
import Experience from "../components/core/home/Experience";
import Resources from "../components/core/home/Resources";
import OurEdge from "../components/core/home/OurEdge";
import Banner from "../components/core/home/Banner";
import LastBanner from "../components/core/home/LastBanner";
import HomeQuote from "../components/core/home/HomeQuote";
import Faq from "../components/core/home/Faq";
import Notification from "../components/core/home/Notification";
import StockTicker from "./GlobleMarket";

const Home = () => {
  return (
    <div>
      {/* <Notification /> */}
      <Navbar />
      <Slider />
      <LivePrice />
      <Investment />
      {/* <StockTicker /> */}
      <br />
      <br />
      <Opportunities />
      <br />
      <br />
      <Helps />
      <Experience />
      <Resources />
      <OurEdge />
      <Banner />
      <LastBanner />
      <HomeQuote />
      {/* <Faq /> */}
    </div>
  );
};

export default Home;
