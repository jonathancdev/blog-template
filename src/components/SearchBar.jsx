import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  const searchIcon = (
    <FontAwesomeIcon icon={faSearch} className="search-bar__icon" />
  );
  return (
    <>
      <label htmlFor="" className="search-bar__label"></label>
      <input type="text" className="search-bar__input"></input>
      <div className="search-bar__icon--wrap">{searchIcon}</div>
    </>
  );
}
