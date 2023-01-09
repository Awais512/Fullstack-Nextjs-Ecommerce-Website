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
        <Countdown />
      </div>
      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        className="flashDeals__swiper"
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
