import React from "react";

import css from "./Header.module.css";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import icon from "../../assets/icons.svg";

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.headerInner}>
        <NavLink className={css.logoLink} to="/">
          <svg className={css.iconLogo} width="25" height="25">
            <use href={`${icon}#icon-logo`}></use>
          </svg>
          Weather
        </NavLink>
        <button className={css.themeBtn} type="button">
          <svg className={css.themeIcon} width="18" height="18">
            <use href={`${icon}#icon-theme`}></use>
          </svg>
        </button>
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
