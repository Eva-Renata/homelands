import { useState } from "react";
import { createContext } from "react";

//creating the context
export const SearchContent = createContext();

//in this wrapper we have to pack in weverything, where we want to have results from the search
//function component
export const SearchWrapper = ({ children }) => {
  const [searchData, setSearchData] = useState("");

  return (
    <SearchContent.Provider value={{ searchData, setSearchData }}>
      {children}
    </SearchContent.Provider>
  );
};
