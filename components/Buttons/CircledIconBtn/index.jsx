import { BiRightArrowAlt } from "react-icons/bi";
import styles from "./styles.module.scss";

const CircledIconBtn = ({ type, text, icon }) => {
  return (
    <button className={styles.button} type={type}>
      {text}
      <div className={styles.svg__wrap}>
        <BiRightArrowAlt />
      </div>
    </button>
  );
};

export default CircledIconBtn;
