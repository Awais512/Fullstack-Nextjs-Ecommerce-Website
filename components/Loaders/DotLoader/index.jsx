import styles from "./styles.module.scss";
import DotLoading from "react-spinners/DotLoader";

const DotLoader = ({ loading }) => {
  return (
    <div className={styles.loader}>
      <DotLoading color="#2f82ff" loading={loading} />
    </div>
  );
};

export default DotLoader;
