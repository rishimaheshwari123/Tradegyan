import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import h1 from "../../../../assets/banner-1.png";
import h2 from "../../../../assets/banner-2.png";
import h3 from "../../../../assets/banner-3.png";
import h4 from "../../../../assets/banner-4.png";
import h5 from "../../../../assets/banner-5.png";

const data = [
  {
    id: 1,
    image: h1,
    title: "“Financial freedom is to be able to do what one wants in life” ",
    subTitle: "Dilshad Billimoria, Founder and Chief Financial Planner",
    btn: "Talk To Us",
  },
  {
    id: 2,
    image: h2,
    title: "Advice today, becomes security tomorrow ",
    subTitle: "Plan your financial future now",
    btn: "Talk To Us",
  },
  {
    id: 3,
    image: h3,
    title: "Age is just a number, but retirement income isn’t",
    subTitle: "Now is the time to start",
    btn: "Talk To Us",
  },
  {
    id: 4,
    image: h4,
    title: "Your wealth management is our topmost priority",
    subTitle: "We provide you with secure solutions",
    btn: "Talk To Us",
  },
  {
    id: 5,
    image: h5,
    title: "Our awards are a mark of our competency",
    subTitle: "We promise to help you plan better",
    btn: "Talk To Us",
  },
];

const Slider = () => {
  return (
    <div className="w-screen">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
      >
        {data.map((item) => (
          <SwiperSlide
            key={item.id}
            className="relative flex items-center justify-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-screen h-[90vh] object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center text-white p-6 ">
              <h2 className="text-2xl lg:text-4xl font-bold mb-2">
                {item.title}
              </h2>
              <p className="text-xl lg:text-3xl  mb-4">{item.subTitle}</p>
              <button className="px-6 py-2 text-base bg-[#62000f] hover:bg-blue-700 rounded">
                {item.btn}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
