import React, { useState, useEffect } from "react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
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
      image: "https://cdn-res.keymedia.com/cms/images/ca/155/0287_637338487618644943.jpg",
      title: "“Financial freedom is to be able to do what one wants in life”",
      headline: "TradeGyan Solution, Founder and Chief Financial Planner",
      description: "Plan your financial future with expert guidance",
      buttonText: "Talk To Us",
      buttonLink: "/contact", // You can set the actual link here
    },
    {
      id: 2,
      image: "https://forefrontwealthpartners.com/wp-content/uploads/Tech-Professionals-New.webp",
      title: "Advice today, becomes security tomorrow",
      headline: "Plan your financial future now",
      description: "Secure your tomorrow with smart financial advice",
      buttonText: "Talk To Us",
      buttonLink: "/contact",
    },
    {
      id: 3,
      image: "https://cdn.britannica.com/86/236186-050-A65A6493/Consultant-financial-advisor-specialist-dealing-with-mature-couple-clients.jpg",
      title: "Age is just a number, but retirement income isn’t",
      headline: "Now is the time to start",
      description: "Make your retirement worry-free with proper planning",
      buttonText: "Talk To Us",
      buttonLink: "/contact",
    },
    {
      id: 4,
      image: "https://media.licdn.com/dms/image/D5612AQFwnEsc4eaobQ/article-cover_image-shrink_600_2000/0/1680151682757?e=2147483647&v=beta&t=YrbHpcm4KN50YVfahOMzeRBo3fCdzVujfp4nzNeMyqk",
      title: "Your wealth management is our topmost priority",
      headline: "We provide you with secure solutions",
      description: "Trust us to manage and grow your wealth responsibly",
      buttonText: "Talk To Us",
      buttonLink: "/contact",
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
              className="w-full h-[75vh] md:h-[90vh] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 z-10 flex items-center justify-center px-4 md:px-8">
              {/* Text Animation */}
              <div
                initial="hidden"
                animate={textVisible ? "visible" : "hidden"}
                variants={fadeInUp}
                className="bg-white/20 backdrop-blur-sm p-4 md:p-8 max-w-sm md:max-w-lg rounded-lg text-center"
              >
                <p className="text-[#efcc41] text-xs md:text-sm font-bold mb-2">
                  {item.title}
                </p>
                <h2 className="text-white text-xl md:text-3xl lg:text-5xl font-bold mb-3 md:mb-4">
                  {item.headline}
                </h2>
                <p className="text-white text-sm md:text-lg mb-4 md:mb-6">
                  {item.description}
                </p>
                {item.buttonText && (
                  <Link
                    to={item.buttonLink}
                    className="bg-[#efcc41] text-[#62000f] px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-[#ffc107] transition transform hover:scale-105 duration-300"
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
