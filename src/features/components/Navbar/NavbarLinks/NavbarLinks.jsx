import WeatherIcon from "../WeatherIcon/WeatherIcon";
import styles from "./NavbarLinks.module.css";
import { HiBars3 } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";

export default function NavbarLinks() {
  return (
    <div className={`${styles.navbar__links} d-flex align-items-center gap-4`}>
      <WeatherIcon />
      <div className={`${styles.navbar__phone} d-none d-md-flex align-items-center justify-content-center rounded-circle`}>
        <FaPhoneAlt />
      </div>
      <button className={`${styles.navbar__btn} d-none d-md-block`}>BOOK NOW</button>
      <div className="d-flex gap-2 align-items-center">
        <div>MENU</div>
        <span className={styles.navbar__bars}>
          <HiBars3 />
        </span>
      </div>
    </div>
  );
}
