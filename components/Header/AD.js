import styles from "./styles.module.scss";
import Link from "next/link";

const AD = () => {
  return (
    <Link href="/browse">
      <div className={styles.ad}></div>
    </Link>
  );
};

export default AD;
