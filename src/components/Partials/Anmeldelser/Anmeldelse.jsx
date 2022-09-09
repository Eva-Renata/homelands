import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../App/Auth";
import axios from "axios";
import styles from "./Anmeldelser.module.scss";

export const Anmeldelser = () => {
  const [randomReview, setRandomReview] = useState();
  const { loginData } = useAuth();

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        "https://api.mediehuset.net/homelands/reviews"
      );
      //console.log(result); -> of all reviews

      //choosing a random one
      const review =
        result.data.items[Math.floor(Math.random() * result.data.items.length)];
      //console.log(result.data.items);
      setRandomReview(review);
    };
    getData();
  }, []);

  // Destructer vars fra useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Definerer funktion til at sende review
  const sendReview = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("user_id", loginData.user_id);

    //making post request
    const result = await axios.post(
      "https://api.mediehuset.net/homelands/reviews",
      formData,
      {
        //sending the token for authorization
        headers: {
          Authorization: "Bearer " + loginData.access_token,
        },
      }
    );
    //if there is no error
    if (!result.error) {
      setSlide();
      reset();
    }
  };
  //making useState for showing the anmeldelse formular
  const [slide, setSlide] = useState(false);

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

        {/* showing only on slide */}
        {slide && (
          <section className={styles.slidein}>
            <form onSubmit={handleSubmit(sendReview)}>
              <div>
                <label htmlFor="titel">Titel:</label>
                <input
                  type="text"
                  id="titel"
                  placeholder={"Titel"}
                  {...register("title", { required: true })}
                />

                {/* Vis hvis der er en fejl */}
                {errors.title && <span>Du skal indtaste titel!</span>}
              </div>
              <div>
                <label htmlFor="annmeldelse">Anmeldelse</label>
                <input
                  type="text"
                  id="content"
                  placeholder={"Anmeldelse"}
                  {...register("content", { required: true })}
                />
                {/* Vis hvis der er en fejl */}
                {errors.review && <span>Du skal indtaste anmeldelse!</span>}
              </div>
              <button>Send</button>
            </form>
          </section>
        )}

        {/* onclick we are settiing the slide */}
        <p className={styles.skriv} onClick={() => setSlide(!slide)}>
          {slide === true ? "Luk" : "Skriv en anmeldelse"}
        </p>
      </section>
    )
  );
};
