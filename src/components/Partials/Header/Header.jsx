import { NavBar } from "../Navigation/NavBar";
import styles from "./Header.module.scss";
import { BiSearch } from "react-icons/bi";

export const Header = () => {
  return (
    <header className={styles.headerwrapper}>
      {/* logo, navigation and search */}
      <div className={styles.logowrapper}>
        <h3>HomeLands</h3>
      </div>
      <div className={styles.right}>
        <NavBar />

        <input type="text" placeholder={"Indtast søgeord"} />
        <BiSearch
          style={{
            background: "grey",
            cursor: "pointer",
            fontSize: "1.7em",
            color: "white",
            padding: "0.2em",
            borderTopRightRadius: "4px",
            borderBottomRightRadius: "4px",
          }}
        />
      </div>
    </header>
  );
};
