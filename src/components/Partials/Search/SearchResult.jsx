import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
//import { Link } from "react-router-dom";
import { Bolig } from "../Boliger/Bolig";
import { SearchContent } from "./SearchData";
import styles from "./SearchBar.module.scss";

//function component
export const SearchResult = () => {
  const { searchData } = useContext(SearchContent);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `https://api.mediehuset.net/homelands/search/${searchData}`
      );
      setSearchResult(result.data.items);
      console.log(result.data.items);
    };
    getData();

    //den reloader hver gang searchData ændrer sig
  }, [searchData]);

  return (
    <>
      <h2>Søgeresultater</h2>
      <section className={styles.searchedboligerwrapper}>
        {searchResult &&
          searchResult.map((item) => {
            return <Bolig key={item.id} data={item} bolig_id={item.id} />;
          })}
      </section>
    </>
  );
};
