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

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <LivePrice />
      <Investment />
      <Opportunities />
      <Helps />
      <Experience />
      <Resources />
      <OurEdge />
      <Banner />
      <LastBanner />
      <HomeQuote />
      <Faq />
    </div>
  );
};

export default Home;
