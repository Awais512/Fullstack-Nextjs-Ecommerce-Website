import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function MainSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mainSwiper"
      >
        {[...Array(8).keys()].map((i) => (
          <SwiperSlide key={i}>
            <img src={`../../../images/${i + 1}.png`} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
