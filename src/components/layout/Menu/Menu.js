import React from "react";
import "./index.css";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu__title">
        <span className="red-text">Dev</span>challenges.io
      </div>
      <div className="navbar">
        <div className="navbar__item">Typography</div>
        <div className="navbar__item">Grid</div>
        <div className="navbar__item">Buttons</div>
        <div className="navbar__item navbar__item--selected">Inputs</div>
      </div>
    </div>
  );
};

export default Menu;
