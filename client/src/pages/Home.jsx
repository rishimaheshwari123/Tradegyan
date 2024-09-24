import React from "react";
import Navbar from "../components/comman/Navbar";
import HeroSection from "../components/core/home/HeroSection";
import YoutubeSection from "../components/core/home/YoutubeSection";
import GoalsSection from "../components/core/home/GoalSection";
import StatsSection from "../components/core/home/StatsSection";
import Footer from "../components/comman/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <YoutubeSection />
      <GoalsSection />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Home;
