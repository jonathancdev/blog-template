import { Link } from "gatsby";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const searchIcon = <FontAwesomeIcon icon={faTimes} className="menu__icon" />;
  const barsIcon = (
    <FontAwesomeIcon icon={faBars} className="hamburger__icon" />
  );
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const hamburgerClick = () => {
    toggleMenu();
  };
  const timesClick = () => {
    toggleMenu();
  };
  return (
    <nav className={!menuOpen ? "navbar" : "navbar active"}>
      <div
        className={menuOpen ? "hamburger" : "hamburger active"}
        onClick={hamburgerClick}
      >
        {barsIcon}
      </div>

      <div className={!menuOpen ? "menu" : "menu active"}>
        <div className="menu__links">
          <Link className="link" to="/">
            News
          </Link>
          <Link className="link" to="/blog">
            Art
          </Link>
          <Link className="link" to="/about">
            Culture
          </Link>
          <Link className="link" to="/about">
            Food
          </Link>
        </div>
        <div className="menu__search-bar">
          <SearchBar />
          <button className="menu__icon--btn" onClick={timesClick}>
            {searchIcon}
          </button>
        </div>
      </div>
    </nav>
  );
}
