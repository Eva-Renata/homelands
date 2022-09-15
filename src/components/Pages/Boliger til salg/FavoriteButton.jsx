import { useEffect } from "react";
import { useState } from "react";
import { useAuth } from "../../App/Auth";
import { AiOutlineHeart } from "react-icons/ai";
import styles from "./BoligerTSDetails.module.scss";
import axios from "axios";

export const FavoriteButton = ({ product_id }) => {
  const { loginData } = useAuth();
  //by default is not favorite
  const [isFavorite, setIsFavorite] = useState(false);
  const [myFavorites, setMyFavorites] = useState([]);

  useEffect(() => {
    const getFavorites = async () => {
      // options because we need the token. to be logged in
      const options = {
        headers: {
          Authorization: `Bearer ${loginData.access_token}`,
        },
      };
      const endpoint = "https://api.mediehuset.net/homelands/favorites";
      const result = await axios.get(endpoint, options);
      //console.log(result.data.item);
      //console.log(loginData);
      if (result.data.items) {
        setMyFavorites(result.data.items);
      }
      setMyFavorites(result.data.items);
    };
    getFavorites();

    const isMyFavorite = myFavorites.some(
      (elm) => elm.product_id === product_id
    );
    setIsFavorite(isMyFavorite);
    console.log(isMyFavorite);
  }, [loginData.access_token, product_id]);

  console.log(isFavorite);

  //add favorite
  const addFavorite = async () => {
    setIsFavorite(true);

    const options = {
      headers: {
        Authorization: `Bearer ${loginData.access_token}`,
      },
    };
    const endpoint = "https://api.mediehuset.net/homelands/favorites";
    const formData = new FormData();
    formData.append(`product_id`, product_id);
    await axios.post(endpoint, formData, options);
  };

  //remove favorite
  const removeFavorite = async () => {
    setIsFavorite(false);

    const options = {
      headers: {
        Authorization: `Bearer ${loginData.access_token}`,
      },
    };
    const endpoint = `https://api.mediehuset.net/homelands/favorites/${product_id}`;
    await axios.delete(endpoint, options);
  };

  return (
    <>
      {/* making two classes so style is different when active or not */}
      <button
        // hvis den er ikke favorit, så sætter den til det.
        //hvis den er, så remover den
        onClick={!isFavorite ? addFavorite : removeFavorite}
        className={isFavorite ? styles.active : styles.favoritbutton}
      >
        <AiOutlineHeart />
      </button>
    </>
  );
};
