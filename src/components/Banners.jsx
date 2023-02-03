import React from "react";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay ";

import { dataBanner } from "./DataBanner";

const Banners = () => {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Navigation, Autoplay]}
      navigation
      loop={true}
      autoplay={true}
      className="h-full relative"
    >
      {dataBanner.map((banner, index) => {
        return (
          <SwiperSlide key={index}>
            <img
              src={banner.url}
              alt=""
              className="h-full w-full object-cover "
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Banners;
