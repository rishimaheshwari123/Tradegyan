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
  },
  {
    id: 2,
    image: h2,
  },
  {
    id: 3,
    image: h3,
  },
  {
    id: 4,
    image: h4,
  },
  {
    id: 5,
    image: h5,
  },
];

const Slider = () => {
  return (
    <div className="w-screen">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
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
              className="w-screen h-[70vh] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
