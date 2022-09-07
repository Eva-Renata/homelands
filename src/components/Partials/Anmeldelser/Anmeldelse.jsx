import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import styles from "./Anmeldelser.module.scss";

export const Anmeldelser = () => {
  const [randomReview, setRandomReview] = useState();

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        "https://api.mediehuset.net/homelands/reviews"
      );
      //console.log(result);

      //choosing a random one
      const review =
        result.data.items[Math.floor(Math.random() * result.data.items.length)];
      //console.log(result.data.items);
      setRandomReview(review);
    };
    getData();
  }, []);

  return (
    //if there is a randomreview than we display it
    randomReview && (
      <section className={styles.reviewswrapper}>
        <h3>Det siger kunderne:</h3>
        <section className={styles.onereview}>
          <h5>{randomReview.title}</h5>
          <p>"{randomReview.content}"</p>
          <p>
            {randomReview.user.firstname} {randomReview.user.lastname},{" "}
            {randomReview.created_friendly}
          </p>
        </section>
        <p className={styles.skriv}>Skriv en anmeldelse</p>
      </section>
    )
  );
};
