import { Layout } from "../../App/Layout";
import styles from "./BoligerTS.module.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Bolig } from "../../Partials/Boliger/Bolig";

export const BoligerTS = () => {
  const [boligerTS, setBoligerTS] = useState();
  const [filtered, setFiltered] = useState([]);
  const { bolig_id } = useParams(0);

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        "https://api.mediehuset.net/homelands/homes"
      );
      //console.log(result.data.items);
      setBoligerTS(result.data.items);
      setFiltered(result.data.items);
    };
    getData();
  }, []);

  //filtering boliger
  const filterItem = (event) => {
    const villatype = event.target.value;
    const updatedItem = boligerTS.filter((curElem) => {
      return villatype === "all" || curElem.type === villatype;
    });
    setFiltered(updatedItem);
  };

  return (
    <Layout title="Boliger" description="Boliger til salg">
      <h2>Boliger til salg</h2>
      <div className={styles.select}>
        <select
          onChange={(event) => filterItem(event)}
          className={styles.select}
        >
          <option value="Alle" onClick={() => setFiltered("boligerTS")}>
            Alle boliger
          </option>
          <option value="Villa" onClick={() => filterItem("Villa")}>
            Villa
          </option>
          <option
            value="Ejerlejlighed"
            onClick={() => filterItem("Ejerlejlighed")}
          >
            Ejerlejlighed
          </option>
          <option value="Andelsbolig" onClick={() => filterItem("Andelsbolig")}>
            Andelsbolig
          </option>
          <option
            value="Villalejlighed"
            onClick={() => filterItem("Villalejlighed")}
          >
            Villalejlighed
          </option>
        </select>
      </div>

      <section className={styles.boligerTSwrapper}>
        {filtered &&
          filtered.map((boligerTS) => {
            return (
              <Bolig
                key={boligerTS.id}
                data={boligerTS}
                bolig_id={bolig_id}
              ></Bolig>
            );
          })}
      </section>
    </Layout>
  );
};
