import styles from "./styles.module.scss";
import Swiper from "./MainSwiper";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>Header</div>
      <div className={styles.menu}>Menu</div>
      <Swiper />
      <div className={styles.offers}>Offers</div>
      <div className={styles.users}>users</div>
    </div>
  );
};

export default Main;
