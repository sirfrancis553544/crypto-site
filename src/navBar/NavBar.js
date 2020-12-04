import React from "react";
import ham from "./ham.svg";
import close from "./ham-close.svg";

export const NavBar = () => {
  return (
    <>
      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" for="menu__toggle">
          <span></span>
        </label>

        <ul className="menu__box">
          <li>
            <a className="menu__item" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="menu__item" href="#">
              Stats
            </a>
          </li>
          <li>
            <a className="menu__item" href="#">
              News
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
