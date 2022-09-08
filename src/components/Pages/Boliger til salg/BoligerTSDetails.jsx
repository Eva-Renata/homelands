import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../App/Layout";
import styles from "./BoligerTSDetails.module.scss";
import { AiFillCamera, AiOutlineBorderRight } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { AiOutlineHeart } from "react-icons/ai";

export const BoligerTSDetails = () => {
  const [boligerTSD, setBoligerTSD] = useState();
  const { bolig_id } = useParams(0);

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `https://api.mediehuset.net/homelands/homes/${bolig_id}`
      );
      console.log(result.data.item);
      setBoligerTSD(result.data.item);
    };
    getData();
    //efter kald af funktion den kører kun en gang.
    //vi skriver i dependency product_id, så den re-renderer hver gang vi trykker på id.
  }, [bolig_id]);

  //need to find the main picture
  //   let mainPicture;
  //for each bolig images should be a main. if it is not, we take the medium
  //   boligerTSD.images.forEach((image) => {
  //     if (image.is_main === "1") {
  //       mainPicture = image.filename.medium;
  //     }
  //   });

  return (
    <Layout title="Bolig detaljer">
      {boligerTSD ? (
        <section className={styles.detaljerside}>
          {/* <img
            src={mainPicture || boligerTSD.images[0].filename.medium}
            alt={mainPicture}
          ></img> */}
          <section className={styles.imagewrapper}>
            <img
              src={boligerTSD.images[0].filename.large}
              alt={boligerTSD.image}
            />
          </section>

          <section className={styles.backgrounddetails}>
            <section className={styles.detaljer}>
              <div>
                <h3>{boligerTSD.address}</h3>
                <p>
                  {boligerTSD.zipcode} {boligerTSD.city}
                </p>
                <p>
                  {boligerTSD.type} | {boligerTSD.floor_space} m2 |{" "}
                  {boligerTSD.num_rooms} vær
                </p>
              </div>

              <section className={styles.icons}>
                <AiFillCamera />
                <AiOutlineBorderRight />
                <ImLocation />
                <AiOutlineHeart />
              </section>

              <section className={styles.rightside}>
                <div className={styles.priswrapper}>
                  <p>Kontantpris </p>
                  <h3>
                    {/* formatting the number to have separator */}
                    {new Intl.NumberFormat("da").format(boligerTSD.price)} DKK
                  </h3>
                </div>
                <div className={styles.priswrapper}>
                  <p>Udbetaling </p>
                  <p>
                    {/* formatting the number to have separator */}
                    {new Intl.NumberFormat("da").format(boligerTSD.payout)} DKK
                  </p>
                </div>
                <div className={styles.priswrapper}>
                  <p>Ejerudgift pr måned </p>
                  <p>
                    {/* formatting the number to have separator */}
                    {new Intl.NumberFormat("da").format(boligerTSD.cost)} DKK
                  </p>
                </div>
              </section>
            </section>

            <section className={styles.middledetaljer}>
              <div className={styles.flexing}>
                <div>
                  <p>Sagsnr:</p>
                  <p>{boligerTSD.id}</p>
                </div>
                <div>
                  <p>Boligareal:</p>
                  <p>{boligerTSD.floor_space} m2</p>
                </div>
                <div>
                  <p>Grundareal:</p>
                  <p>{boligerTSD.ground_space} m2</p>
                </div>
                <div>
                  <p>Antal rum:</p>
                  <p>{boligerTSD.num_rooms}</p>
                </div>
                <div>
                  <p>Antal plan:</p>
                  <p>{boligerTSD.num_floors}</p>
                </div>
              </div>
              <div className={styles.flexing}>
                <div>
                  <p>Kælder:</p>
                  <p>{boligerTSD.basement_space} m2</p>
                </div>
                <div>
                  <p>Byggeår:</p>
                  <p>{boligerTSD.year_construction} m2</p>
                </div>
                <div>
                  <p>Ombygget:</p>
                  <p>{boligerTSD.year_rebuilt} m2</p>
                </div>
                <div>
                  <p>Energimærke:</p>
                  <p>{boligerTSD.energy_label_name}</p>
                </div>
                <div>
                  <p>Liggetid:</p>
                  <p>{boligerTSD.date_friendly}</p>
                </div>
              </div>
              <div className={styles.flexing}>
                <div>
                  <p>Kontantpris:</p>
                  <p>
                    {/* formatting the number to have separator */}
                    {new Intl.NumberFormat("da").format(boligerTSD.price)} DKK
                  </p>
                </div>
                <div>
                  <p>Udbetaling:</p>
                  <p>
                    {" "}
                    {/* formatting the number to have separator */}
                    {new Intl.NumberFormat("da").format(boligerTSD.payout)}
                  </p>
                </div>
                <div>
                  <p>Brutto ex. ejerudgift:</p>
                  <p>
                    {/* formatting the number to have separator */}
                    {new Intl.NumberFormat("da").format(boligerTSD.gross)}
                  </p>
                </div>
                <div>
                  <p>Netto ex. ejerudgift:</p>
                  <p>
                    {/* formatting the number to have separator */}
                    {new Intl.NumberFormat("da").format(boligerTSD.net)}
                  </p>
                </div>
                <div>
                  <p>Ejerudgift:</p>
                  <p>
                    {/* formatting the number to have separator */}
                    {new Intl.NumberFormat("da").format(boligerTSD.cost)}
                  </p>
                </div>
              </div>
            </section>

            <section className={styles.lastdetails}>
              <div>{boligerTSD.description}</div>
              <div>
                <h3>Kontakt</h3>
                <figure>
                  <img src={boligerTSD.staff.image} alt="" />
                  <figcaption>
                    <h5>
                      {boligerTSD.staff.firstname} {boligerTSD.staff.lastname}
                    </h5>
                    <p>{boligerTSD.staff.position}</p>
                    <div className={styles.moreinfos}>
                      <p>Email: {boligerTSD.staff.email}</p>
                      <p>Mobil: {boligerTSD.staff.phone}</p>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </section>
          </section>
        </section>
      ) : null}
    </Layout>
  );
};
