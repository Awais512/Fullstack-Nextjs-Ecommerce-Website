import styles from "./styles.module.scss";
import MainSwiper from "./MainSwiper";
import Offers from "./Offers";
import Menu from "./Menu";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>Header</div>
      <Menu />
      <MainSwiper />
      <Offers />

      <div className={styles.users}>users</div>
    </div>
  );
};

export default Main;
