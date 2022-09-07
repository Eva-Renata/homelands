import styles from "./Footer.module.scss";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className={styles.footerwrapper}>
      {/* onclick the name go to homepage top */}
      <NavLink
        to={"/"}
        onClick={() => {
          document.documentElement.scrollTop = 0;
        }}
      >
        <h3>HomeLands</h3>
      </NavLink>
      <div>
        <p>Øster Uttrupvej 5</p>
        <p>9000 Aalborg</p>
      </div>
      <div>
        <p>Email: info@homelands.dk</p>
        <p>Telefon: +45 11223344</p>
      </div>
      <div className={styles.social}>
        <AiFillFacebook />
        <AiFillInstagram />
        <AiFillLinkedin />
      </div>
    </footer>
  );
};
