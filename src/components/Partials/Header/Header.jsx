import { NavBar } from "../Navigation/NavBar";
import styles from "./Header.module.scss";
import { BiSearch } from "react-icons/bi";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.headerwrapper}>
      {/* logo, navigation and search */}
      <div className={styles.logowrapper}>
        <NavLink to={"/"}>
          <h3>HomeLands</h3>
        </NavLink>
      </div>
      <div className={styles.right}>
        <NavBar />
        <input type="text" placeholder={"Indtast søgeord"} />
        <BiSearch />
      </div>
    </header>
  );
};
