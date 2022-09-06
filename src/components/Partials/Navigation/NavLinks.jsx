import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

//making navkinks so we can reuse in both mobile and desktop
export const NavLinks = () => {
  return (
    <ul className={styles.navlinks}>
      <li>
        <NavLink to="/">Forside</NavLink>
      </li>
      <li>
        <NavLink to="/boliger">Boliger til salg</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </ul>
  );
};
