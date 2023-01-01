import styles from "./styles.module.scss";
import { MdSecurity } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import { RiAccountPinCircleLine, RiArrowDropDownFill } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";
import UserMenu from "./UserMenu";

const Top = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li>
            <img
              src="https://w7.pngwing.com/pngs/72/2/png-transparent-flag-of-pakistan-independence-day-green-flag-school-pakistan-flag-independence-day-desktop-wallpaper.png"
              alt="Country"
            />
            <span>Pakistan / Usd</span>
          </li>

          <li>
            <MdSecurity />
            <span>Buyer Protection</span>
          </li>
          <li>
            <span>Customer Service</span>
          </li>
          <li>
            <span>Help</span>
          </li>
          <li>
            <BsSuitHeart />
            <Link href="/profile/whishlist">
              <span>Whishlist</span>
            </Link>
          </li>
          <li>
            {loggedIn ? (
              <li>
                <div className={styles.flex}>
                  <img
                    src="https://www.clipartmax.com/png/middle/319-3191274_male-avatar-admin-profile.png"
                    alt=""
                  />
                  <span>Awais</span>
                  <RiArrowDropDownFill />
                </div>
              </li>
            ) : (
              <li>
                <div className={styles.flex}>
                  <RiAccountPinCircleLine />
                  <span>Account</span>
                  <RiArrowDropDownFill />
                </div>
              </li>
            )}

            <UserMenu loggedIn={loggedIn} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Top;
