import styles from "./styles.module.scss";
import MainSwiper from "./MainSwiper";
import Offers from "./Offers";
import Menu from "./Menu";
import User from "./User";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>Header</div>
      <Menu />
      <MainSwiper />
      <Offers />
      <User />
    </div>
  );
};

export default Main;
