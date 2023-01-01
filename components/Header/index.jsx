import React from "react";
import AD from "./AD";
import Main from "./Main";
import styles from "./styles.module.scss";
import Top from "./Top";

const Header = () => {
  return (
    <header className={styles.header}>
      <AD />
      <Top />
      <Main />
    </header>
  );
};

export default Header;
