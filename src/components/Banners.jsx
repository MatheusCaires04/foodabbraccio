import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { dataBanner } from "./DataBanner";

const Banners = () => {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Navigation]}
      navigation
      loop={true}
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
