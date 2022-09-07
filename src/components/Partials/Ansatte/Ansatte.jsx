import axios from "axios";
import { useEffect, useState } from "react";
import { Ansat } from "./Ansat";
import styles from "./Ansatte.module.scss";

export const Ansatte = () => {
  const [ansatte, setAnsatte] = useState();

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        "https://api.mediehuset.net/homelands/staff"
      );
      //console.log(result.data.items);
      setAnsatte(result.data.items);
    };
    getData();
  }, []);

  return (
    <section className={styles.ansattewrapper}>
      <h3>Mød vores ansatte</h3>
      <div className={styles.flex}>
        {/* mapping the workers , using ansat component, to be reused later */}
        {ansatte &&
          ansatte.map((ansat) => {
            return (
              <Ansat
                data={ansat}
                moreinfosDetails={true}
                key={ansat.id}
              ></Ansat>
            );
          })}
      </div>
    </section>
  );
};
