import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

const Links = () => {
  return (
    <div className={styles.footer__links}>
      {links.map((link, i) => (
        <ul key={i}>
          {i === 0 ? (
            <img src="../../images/logo.png" alt="" />
          ) : (
            <b>{link.heading}</b>
          )}
          {link.links.map((link, i) => (
            <li key={i}>
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default Links;

const links = [
  {
    heading: "SHOPPAY",
    links: [
      {
        name: "About Us",
        link: "",
      },
      {
        name: "Contact Us",
        link: "",
      },
      {
        name: "Social Responsibility",
        link: "",
      },
      {
        name: "",
        link: "",
      },
    ],
  },
  {
    heading: "HELP & SUPPORT",
    links: [
      {
        name: "Shipping Info",
        link: "",
      },
      {
        name: "Returns",
        link: "",
      },
      {
        name: "How to Order",
        link: "",
      },
      {
        name: "How to Track",
        link: "",
      },
      {
        name: "Size Guide",
        link: "",
      },
    ],
  },
  {
    heading: "Customer Service",
    links: [
      {
        name: "Customer Service",
        link: "",
      },
      {
        name: "Terms and Conditions",
        link: "",
      },
      {
        name: "Consumers (Transactions)",
        link: "",
      },
      {
        name: "Take Our Feedback survey",
        link: "",
      },
    ],
  },
];
