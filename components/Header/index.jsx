import React from "react";
import AD from "./AD";
import Main from "./Main";
import styles from "./styles.module.scss";
import Top from "./Top";

const Header = ({ country }) => {
  return (
    <header className={styles.header}>
      <AD />
      <Top country={country} />
      <Main />
    </header>
  );
};

export default Header;
