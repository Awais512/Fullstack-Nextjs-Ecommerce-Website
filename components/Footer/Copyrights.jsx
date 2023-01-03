import Link from "next/link";
import styles from "./styles.module.scss";
import { IoLocationSharp } from "react-icons/io5";

const Copyrights = ({ country }) => {
  return (
    <div className={styles.footer__copyright}>
      <section>©2023 SHOPPAY ALL RIGHTS RESERVED</section>
      <section>
        <ul>
          {data.map((item, i) => (
            <li key={i}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
          <li>
            <a>
              <IoLocationSharp /> United Kingdom
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Copyrights;

const data = [
  {
    name: "Privacy Center",
    link: "",
  },
  {
    name: "Privacy & Cookie Policy",
    link: "",
  },
  {
    name: "Manage Cookies",
    link: "",
  },
  {
    name: "Terms & Conditions",
    link: "",
  },
  {
    name: "Copyright Notice",
    link: "",
  },
];
