import React from "react";

export const NavBar = () => {
  return (
    <>
      {" "}
      <div className="navbar">
        <span className="navbar welcome">LOGO</span>
        <ul className="navbar">Home</ul>
        <ul className="navbar">Stats</ul>
        <ul className="navbar">News</ul>
      </div>
      <div className="line"></div>
    </>
  );
};
