import styles from "./styles.module.scss";
import Paypal from "../../public/images/payp.png";
import Visa from "../../public/images/visa.png";
import Master from "../../public/images/master.png";
import Image from "next/image";

const Payment = () => {
  return (
    <div className={styles.footer__payment}>
      <h3>WE ACCEPT</h3>
      <div className={styles.footer__flexwrap}>
        <Image src={Visa} alt="Visa Icon" />
        <Image src={Master} alt="Master Card Icon" />
        <Image src={Paypal} alt="Paypal Icon" />
      </div>
    </div>
  );
};

export default Payment;
