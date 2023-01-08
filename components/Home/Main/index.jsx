import styles from "./styles.module.scss";
import MainSwiper from "./MainSwiper";
import Offers from "./Offers";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>Header</div>
      <div className={styles.menu}>Menu</div>
      <MainSwiper />
      <Offers />

      <div className={styles.users}>users</div>
    </div>
  );
};

export default Main;
