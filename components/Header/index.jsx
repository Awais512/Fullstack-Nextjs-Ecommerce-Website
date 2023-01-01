import React from "react";
import AD from "./AD";
import styles from "./styles.module.scss";
import Top from "./Top";

const Header = () => {
  return (
    <header className={styles.header}>
      <AD />
      <Top />
    </header>
  );
};

export default Header;
