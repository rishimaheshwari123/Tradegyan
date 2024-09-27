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
        "https://www.shareindia.com/wp-content/uploads/2023/12/Who-is-a-Share-Market-Advisor-_-How-Do-They-Work.webp",
      title: "Your Vision. Our Mission.",
      headline: "We Help To Build Your Dream",
      description:
        "Our vans are fitted with high pressure jetting units which will clear blocked drain safely, easily and professionally.",
      buttonText: "CONTACT US",
      buttonLink: "#",
    },
    {
      id: 2,
      image:
        "https://images.inc.com/uploaded_files/image/1920x1080/getty_660952912_374375.jpg",
      title: "Innovative Solutions",
      headline: "Building a Brighter Future",
      description:
        "We offer a wide range of construction services to make your dream home a reality.",
      buttonText: "LEARN MORE",
      buttonLink: "#",
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
    },
  ];

  const handleSlideChange = () => {
    setTextVisible(false);
    setTimeout(() => setTextVisible(true), 500);
  };

  return (
    <div className="relative bg-[#62000f]"> {/* Set background to deep maroon */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
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
              className="w-full h-[90vh] object-cover" 
            />
            <div
              className={`absolute inset-0 z-10 flex flex-col justify-center transition-opacity duration-1000 ${
                textVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="bg-[#62000f] bg-opacity-60 text-white p-8 max-w-lg ml-auto"> {/* Semi-transparent background */}
                <p className="text-[#efcc41] text-sm font-bold mb-2">
                  {item.title}
                </p>
                <h2 className="text-white text-2xl md:text-5xl font-bold mb-4">
                  {item.headline}
                </h2>
                <p className="text-white text-lg mb-6">
                  {item.description}
                </p>
                {item.buttonText && (
                  <Link
                    to={item.buttonLink ? item.buttonLink : "#"}
                    className="bg-[#efcc41] text-[#62000f] px-6 py-3 rounded-full font-semibold hover:bg-[#ffc107] transition duration-300"
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
