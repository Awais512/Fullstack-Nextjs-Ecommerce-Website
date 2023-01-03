import styles from "./styles.module.scss";
import { BiUser } from "react-icons/bi";
import { SiMinutemailer } from "react-icons/si";
import { IoKeyOutline } from "react-icons/io5";

const LoginInput = ({ icon, placeholder }) => {
  return (
    <div className={styles.input}>
      {icon === "user" ? (
        <BiUser />
      ) : icon === "email" ? (
        <SiMinutemailer />
      ) : icon === "password" ? (
        <IoKeyOutline />
      ) : (
        ""
      )}
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default LoginInput;
