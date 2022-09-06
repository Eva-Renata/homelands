import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import styles from "./Anmeldelser.module.scss";

export const Anmeldelser = () => {
  //getting all the reviews
  const [anmeldelser, setAnmeldelser] = useState();
  //gettine one random review from the list
  //   const anmeldelse =
  //     anmeldelser[Math.floor(Math.random() * anmeldelser.length)];
  //   console.log(anmeldelse.title);

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        "https://api.mediehuset.net/homelands/reviews"
      );
      console.log(result.data.items);
      setAnmeldelser(result.data.items);
    };
    getData();
  }, []);

  //   const anmeldelse =
  //     anmeldelser[Math.floor(Math.random() * anmeldelser.length)];
  //   console.log(anmeldelse.title);
  return (
    <section className={styles.reviewswrapper}>
      <h3>Det siger kunderne:</h3>
      {/* <p>{anmeldelse.title}</p> */}
      {/* <p>{anmeldelse.content}</p> */}
      <a>Skriv en anmeldelse</a>
    </section>
  );
};
