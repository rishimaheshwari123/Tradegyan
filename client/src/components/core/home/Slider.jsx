import React, { useState, useEffect } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
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
      image:
        "https://images.inc.com/uploaded_files/image/1920x1080/getty_660952912_374375.jpg",
 
      title: "Personalized Investment Strategies",
      headline: "Your Goals, Our Priority",
      description:
        "Our expert advisors craft personalized investment strategies to help you achieve financial stability and growth. From market analysis to portfolio management, we ensure your investments are in good hands.",
      buttonText: "LEARN MORE",
      buttonLink: "/contact",
    },
    {
      id: 3,
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/7/435428234/VD/MG/FA/223449165/stock-market-advisor-service.jpg",
      title: "Expert Financial Guidance",
      headline: "Your Wealth, Our Expertise",
      description:
        "Our investment advisors provide tailored solutions to help grow and manage your financial portfolio with the highest level of professionalism.",
      buttonText: "EXPLORE",
      buttonLink: "/trader",
    },
  ];

  const handleSlideChange = () => {
    setTextVisible(false);
    setTimeout(() => setTextVisible(true), 500);
  };

  return (
    <div className="relative bg-[#62000f]">
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectFade,
        ]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        spaceBetween={0}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
        onSlideChange={handleSlideChange}
      >
        {work.map((item) => (
          <SwiperSlide key={item.id} className="relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[80vh] sm:h-[60vh] md:h-[80vh] lg:h-[90vh] object-cover"
            />
            <div
              className={`absolute inset-0 p-8 z-10 flex flex-col justify-center transition-opacity duration-1000 ${
                textVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="bg-[#62000f] bg-opacity-60 text-white p-5  sm:p-6 md:p-8 lg:p-12 max-w-full  md:max-w-lg ml-auto">
                <p className="text-[#efcc41] text-xs sm:text-sm md:text-base font-bold mb-2">
                  {item.title}
                </p>
                <h2 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                  {item.headline}
                </h2>
                <p className="text-white text-sm sm:text-base md:text-lg mb-6">
                  {item.description}
                </p>
                {item.buttonText && (
                  <Link
                    to={item.buttonLink ? item.buttonLink : "#"}
                    className="bg-[#efcc41] text-[#62000f] px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-[#ffc107] transition duration-300"
                  >
                    {item.buttonText}
                  </Link>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Centered Advice Message */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center bg-black bg-opacity-70 p-4 z-10">
        <p className="text-white text-base sm:text-lg font-semibold text-center max-w-xs sm:max-w-md mx-4 border border-white rounded-lg p-2 shadow-lg animate-blink">
          “Free” Advice is more Expensive than “Fee” Advice
        </p>
      </div>
    </div>
  );
};

export default Slider;
