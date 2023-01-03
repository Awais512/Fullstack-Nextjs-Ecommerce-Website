/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/signin.module.scss";
import { BiLeftArrowAlt } from "react-icons/bi";
import Link from "next/link";

const signin = () => {
  return (
    <>
      <Header />
      <div className={styles.login}>
        <div className={styles.login__container}>
          <div className={styles.login__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
              We'd be happy to join us ! <Link href="/">Go store</Link>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default signin;
