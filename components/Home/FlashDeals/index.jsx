import styles from "./styles.module.scss";
import { MdFlashOn } from "react-icons/md";
import Countdown from "../../Countdown";
import { flashDealsArray } from "../../../data/home";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import FlashCard from "./FlashCard";

const FlashDeals = () => {
  return (
    <div className={styles.flashDeals}>
      <div className={styles.flashDeals__header}>
        <h1>
          Flash Sale <MdFlashOn />
        </h1>
        <Countdown date={new Date(2023, 6, 2, 25)} />
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="flashDeals__swiper"
        breakpoints={{
          450: {
            slidesPerView: 2,
          },
          630: {
            slidesPerView: 3,
          },
          920: {
            slidesPerView: 4,
          },
          1232: {
            slidesPerView: 5,
          },
          1520: {
            slidesPerView: 6,
          },
        }}
      >
        <div className={styles.flashDeals__list}>
          {flashDealsArray.map((item, i) => (
            <SwiperSlide key={i}>
              <FlashCard product={item} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default FlashDeals;
