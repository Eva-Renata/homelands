import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";
import { Twirl as Hamburger } from "hamburger-react";
import { useState } from "react";

//making navkinks so we can reuse in both mobile and desktop
export const NavLinks = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
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
      <div
        className={styles.hambrgerwrapper}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Hamburger color="white" className={styles.hamburger} />
        {open && (
          <ul className={styles.navlinksopen}>
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
        )}
      </div>
    </>
  );
};
