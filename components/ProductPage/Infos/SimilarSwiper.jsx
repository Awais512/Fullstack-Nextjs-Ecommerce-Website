/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useRef } from "react";
import { Navigation } from "swiper";
import { simillar_products } from "../../../data/products";
import Link from "next/link";

const SimilarSwiper = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={5}
      slidesPerGroup={3}
      navigation={true}
      modules={[Navigation]}
      className="swiper simillar_swiper products__swiper"
      breakpoints={{
        640: {
          width: 640,
          slidesPerView: 5,
        },
      }}
    >
      {simillar_products.map((p, i) => (
        <SwiperSlide key={i}>
          <Link href="" key={p._id} legacyBehavior>
            <img src={p} alt="" />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SimilarSwiper;
