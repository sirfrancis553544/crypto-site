import React from "react";
import ham from "./ham.svg"
import close from "./ham-close.svg"


export const NavBar = () => {
  return (
    <>
    
     
  <div className="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label className="menu__btn" for="menu__toggle">
      <span></span>
    </label>

    <ul className="menu__box">
      <li><a className="menu__item" href="#">Главная</a></li>
			<li><a className="menu__item" href="#">Проекты</a></li>
			<li><a className="menu__item" href="#">Команда</a></li>
			<li><a className="menu__item" href="#">Блог</a></li>
			<li><a className="menu__item" href="#">Контакты</a></li>
    </ul>
  </div>
  



    </>
  );
};
