import { Layout } from "../../App/Layout";
import styles from "./BoligerTS.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Bolig } from "../../Partials/Boliger/Bolig";

export const BoligerTS = () => {
  const [boligerTS, setBoligerTS] = useState();

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        "https://api.mediehuset.net/homelands/homes"
      );
      //console.log(result.data.items);
      setBoligerTS(result.data.items);
    };
    getData();
  }, []);
  return (
    <Layout title="Boliger" description="Boliger til salg">
      <h2>Boliger til salg</h2>
      <section className={styles.boligerTSwrapper}>
        {boligerTS &&
          boligerTS.map((boligerTS) => {
            return <Bolig key={boligerTS.id} data={boligerTS}></Bolig>;
          })}
      </section>
    </Layout>
  );
};
