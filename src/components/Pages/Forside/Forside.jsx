import { Layout } from "../../App/Layout";
import { Anmeldelser } from "../../Partials/Anmeldelser/Anmeldelse";
import { Slider } from "../../Partials/Slider/Slider";
import styles from "./Forside.module.scss";

export const Forside = () => {
  //creating an array of images of houses
  const slides = [
    {
      url: "https://api.mediehuset.net/images/homelands/large/apartment-3.jpg",
      title: "apartment3",
    },
    {
      url: "https://api.mediehuset.net/images/homelands/large/house-1.jpg",
      title: "house1",
    },
    {
      url: "https://api.mediehuset.net/images/homelands/large/house-2.jpg",
      title: "house2",
    },
    {
      url: "https://api.mediehuset.net/images/homelands/large/house-3.jpg",
      title: "house3",
    },
    {
      url: "https://api.mediehuset.net/images/homelands/large/apartment-2.jpg",
      title: "apartment2",
    },
  ];

  return (
    <Layout
      title="Homelands"
      description="Homeland presenterer den bedste huse og lejligheder til dig"
    >
      <section className={styles.sliderCompWrapper}>
        <Slider slides={slides} />
      </section>
      <Anmeldelser />
    </Layout>
  );
};
