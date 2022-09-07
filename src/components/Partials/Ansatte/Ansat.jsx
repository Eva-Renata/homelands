import styles from "./Ansatte.module.scss";

export const Ansat = (props) => {
  const ansat = props.data;
  return (
    <section className={styles.figurewrapper} key={ansat.id}>
      <figure
        style={{
          backgroundImage: `url(${ansat.image})`,
        }}
      >
        <figcaption>
          <h5>
            {ansat.firstname} {ansat.lastname}
          </h5>
          <p>{ansat.position}</p>
          <div className={styles.moreinfos}>
            <p>Email: {ansat.email}</p>
            <p>Mobil: {ansat.phone}</p>
          </div>
        </figcaption>
      </figure>
    </section>
  );
};
