import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import { useEffect, useRef } from "react";

const ProductSwiper = ({ images }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current.swiper.autoplay.stop();
  }, []);

  return (
    <div
      className={styles.swiper}
      onMouseEnter={() => {
        swiperRef.current.swiper.autoplay.start();
        swiperRef.current.swiper.slideTo(0);
      }}
      onMouseLeave={() => {
        swiperRef.current.swiper.autoplay.stop();
      }}
    >
      <Swiper
        ref={swiperRef}
        centeredSlides={true}
        autoplay={{ delay: 500, stopOnLastSlide: false }}
        speed={500}
        modules={[Autoplay]}
      >
        {images.map((img) => (
          <SwiperSlide key={img.color}>
            <img src={img.url} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSwiper;
