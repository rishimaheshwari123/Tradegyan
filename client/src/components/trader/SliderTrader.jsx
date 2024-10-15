import React, { useState, useEffect } from "react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";

const Slider = () => {
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const work = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4", // Image showing stock market data on a screen with people analyzing it.
      title: "Your Wealth, Our Mission",
      headline: "Grow Your Portfolio with Expert Guidance",
      description:
        "At TradeGyan, we provide tailored investment strategies to maximize your financial potential. With years of market experience, we help you navigate through the complexities of the stock market to ensure your portfolio’s long-term success.",
      buttonText: "CONTACT US",
      buttonLink: "/contact",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514", // A professional investor or financial advisor discussing stock charts on a tablet or computer.
      title: "Expert Stock Market Insights",
      headline: "Unlock Opportunities, Mitigate Risks",
      description:
        "Our team of seasoned financial experts analyzes market trends and offers proactive advice to help you stay ahead. With TradeGyan, you can unlock investment opportunities while effectively managing risks for sustainable growth.",
      buttonText: "LEARN MORE",
      buttonLink: "/about",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d", // A successful investor smiling in front of financial graphs representing growth.
      title: "Personalized Investment Plans",
      headline: "Achieve Your Financial Goals with Us",
      description:
        "Whether you're a beginner or a seasoned investor, TradeGyan creates personalized investment plans based on your financial goals and risk appetite. Let us help you build wealth through smart, informed decisions.",
      buttonText: "LEARN",
      buttonLink: "/learn",
    },
  ];
  

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="relative bg-[#1a202c]"> {/* Dark background */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        spaceBetween={0}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 0 },
          768: { slidesPerView: 1, spaceBetween: 0 },
          1024: { slidesPerView: 1, spaceBetween: 0 },
        }}
      >
        {work.map((item) => (
          <SwiperSlide key={item.id} className="relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[90vh] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 z-10 flex items-center">
              {/* Text Animation */}
              <div
                initial="hidden"
                animate={textVisible ? "visible" : "hidden"}
                variants={fadeInUp}
                className="p-8 max-w-lg ml-auto bg-white/20 backdrop-blur-sm rounded-lg"
              >
                <p className="text-[#efcc41] text-sm font-bold mb-2">
                  {item.title}
                </p>
                <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
                  {item.headline}
                </h2>
                <p className="text-white text-lg mb-6">
                  {item.description}
                </p>
                {item.buttonText && (
                  <Link
                    to={item.buttonLink}
                    className="bg-[#efcc41] text-[#62000f] px-6 py-3 rounded-full font-semibold hover:bg-[#ffc107] transition transform hover:scale-105 duration-300"
                  >
                    {item.buttonText}
                  </Link>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
