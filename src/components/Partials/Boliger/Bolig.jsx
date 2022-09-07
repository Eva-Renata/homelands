import styles from "./Bolig.module.scss";

export const Bolig = (props) => {
  //console.log(props);
  const bolig = props.data;
  //need to find the main picture
  let mainPicture;
  //for each bolig images should be a main. if it is not, we take the medium
  bolig.images.forEach((image) => {
    if (image.is_main === "1") {
      mainPicture = image.filename.medium;
    }
  });

  return (
    <section className={styles.boligwrapper}>
      <figure>
        {/* main picture, or medium */}
        <img
          src={mainPicture || bolig.images[0].filename.medium}
          alt={mainPicture}
        ></img>
        <figcaption>
          <h4>{bolig.address}</h4>
          <p>
            {bolig.zipcode} {bolig.city}
          </p>
          <p>{bolig.type}</p>
          <div className={styles.bottompart}>
            <div className={styles.left}>
              <span>{bolig.energy_label_name}</span>
              <p>
                {bolig.num_rooms} værelser, {bolig.floor_space} m2
              </p>
            </div>

            <p className={styles.price}>
              {/* formatting the number to have separator */}
              {new Intl.NumberFormat("da").format(bolig.price)} DKK
            </p>
          </div>
        </figcaption>
      </figure>
    </section>
  );
};
