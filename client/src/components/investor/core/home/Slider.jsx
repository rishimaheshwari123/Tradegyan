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
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    image:
      "https://cdn-res.keymedia.com/cms/images/ca/155/0287_637338487618644943.jpg",
    title: "“Financial freedom is to be able to do what one wants in life” ",
    subTitle: "TradeGyan Solution, Founder and Chief Financial Planner",
    btn: "Talk To Us",
  },
  {
    id: 2,
    image:
      "https://forefrontwealthpartners.com/wp-content/uploads/Tech-Professionals-New.webp",
    title: "Advice today, becomes security tomorrow ",
    subTitle: "Plan your financial future now",
    btn: "Talk To Us",
  },
  {
    id: 3,
    image:
      "https://cdn.britannica.com/86/236186-050-A65A6493/Consultant-financial-advisor-specialist-dealing-with-mature-couple-clients.jpg",
    title: "Age is just a number, but retirement income isn’t",
    subTitle: "Now is the time to start",
    btn: "Talk To Us",
  },
  {
    id: 4,
    image:
      "https://media.licdn.com/dms/image/D5612AQFwnEsc4eaobQ/article-cover_image-shrink_600_2000/0/1680151682757?e=2147483647&v=beta&t=YrbHpcm4KN50YVfahOMzeRBo3fCdzVujfp4nzNeMyqk",
    title: "Your wealth management is our topmost priority",
    subTitle: "We provide you with secure solutions",
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
              <Link
                to={"/investor/contact-us"}
                className="px-6 py-2 text-base bg-yellow-600 hover:bg-blue-700 rounded"
              >
                {item.btn}
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
