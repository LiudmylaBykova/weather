import { NavLink } from "react-router-dom";
import { useTheme } from "next-themes";

import SearchBar from "../SearchBar/SearchBar";
import icon from "../../assets/icons.svg";

import css from "./Header.module.css";

const Header = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const themeToggle = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };
  return (
    <header className={css.header}>
      <div className={css.headerInner}>
        <NavLink className={css.logoLink} to="/">
          <svg className={css.iconLogo} width="25" height="25">
            <use href={`${icon}#icon-logo`}></use>
          </svg>
          Weather
        </NavLink>
        <button className={css.themeBtn} type="button" onClick={themeToggle}>
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
