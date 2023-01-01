import Links from "./Links";
import NewsLetter from "./NewsLetter";
import Socials from "./Socials";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Links />
        <Socials />
        <NewsLetter />
      </div>
    </footer>
  );
};

export default Footer;
