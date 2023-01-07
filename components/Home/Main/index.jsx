import styles from "./styles.module.scss";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>Header</div>
      <div className={styles.menu}>Menu</div>
      <div className={styles.swiper}>Swiper</div>
      <div className={styles.offers}>Offers</div>
      <div className={styles.users}>users</div>
    </div>
  );
};

export default Main;
