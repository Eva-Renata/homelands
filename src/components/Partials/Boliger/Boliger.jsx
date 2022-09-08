import axios from "axios";
import { useEffect, useState } from "react";
import { Bolig } from "./Bolig";
import styles from "./Boliger.module.scss";
import { useParams } from "react-router-dom";

export const Boliger = () => {
  const [boliger, setBoliger] = useState();
  const { bolig_id } = useParams(0);

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        "https://api.mediehuset.net/homelands/homes"
      );
      //getting the list of boliger, shuffeling it and showing only the first 3
      const boliger = result.data.items
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
      //console.log(boliger);
      setBoliger(boliger);
    };
    getData();
  }, []);

  return (
    <section className={styles.boligerwrapper}>
      {/* mapping boliger with bolig component (to be reused) */}
      {boliger &&
        boliger.map((bolig) => {
          return (
            <Bolig key={bolig.id} data={bolig} bolig_id={bolig_id}></Bolig>
          );
        })}
    </section>
  );
};
