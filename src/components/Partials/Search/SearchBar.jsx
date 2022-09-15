import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.scss";
import { SearchContent } from "./SearchData";

export const SearchBar = () => {
  //en del af react router, som bruges til at navigere på en ny side
  const navigate = useNavigate();
  const { setSearchData } = useContext(SearchContent);
  const { register, handleSubmit } = useForm();

  const getResult = (data) => {
    setSearchData(data.SearchItem);
    navigate("/search", { replace: true });
  };

  return (
    <form className={styles.searchform} onSubmit={handleSubmit(getResult)}>
      <input
        type="text"
        id="searchItem"
        placeholder="Indtast søgeord"
        {...register("SearchItem", { required: true })}
      />
      <button> &#x1F50E; </button>
    </form>
  );
};
