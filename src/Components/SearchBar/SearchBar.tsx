import React, { ChangeEvent } from "react";

type propsType = {
    placeholder: string,
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void,
}

const SearchBar = ({placeholder, handleChange}: propsType) => {
  return (
    <input
      type="search"
      placeholder={placeholder}
      id="searchBar"
      className="search-bar"
      onChange={handleChange}
    />
  );
};

export default SearchBar;