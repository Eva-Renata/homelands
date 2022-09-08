import { Layout } from "../../App/Layout";
import styles from "./BoligerTS.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Bolig } from "../../Partials/Boliger/Bolig";
//import Select from "react-select";

export const BoligerTS = () => {
  const [boligerTS, setBoligerTS] = useState();
  const [filtered, setFiltered] = useState([]);

  // making options for the select
  // const options = [
  //   { value: "Villa", label: "Villa" },
  //   { value: "Ejerlejlighed", label: "Ejerlejlighed" },
  //   { value: "Andelsbolig", label: "Andelsbolig" },
  // ];

  //component for select
  // const MyComponent = () => <Select options={options} />;

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        "https://api.mediehuset.net/homelands/homes"
      );
      console.log(result.data.items);
      setBoligerTS(result.data.items);
      setFiltered(result.data.items);
    };
    getData();
  }, []);

  //filtering boliger
  const filterItem = (villatype) => {
    const updatedItem = boligerTS.filter((curElem) => {
      return curElem.result.data.items.type === villatype;
    });
    setFiltered(updatedItem);
  };

  return (
    <Layout title="Boliger" description="Boliger til salg">
      <h2>Boliger til salg</h2>
      <div className={styles.select}>
        {/* <MyComponent options={options} />  */}
        <select>
          <option value="Alle" onClick={() => setFiltered(boligerTS)}>
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
            return <Bolig key={boligerTS.id} data={boligerTS}></Bolig>;
          })}
      </section>
    </Layout>
  );
};
