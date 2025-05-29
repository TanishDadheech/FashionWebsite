import React, { useState } from "react";
import "./LeftSide.css";
import logo from "../../assets/logo.png"
import menuData from "../../Data/menuData.json";

const LeftSide = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="leftside">
        <div className="header">
          <div className="logo">
            <a href="#">
              <img src={logo} alt="" />
            </a>
          </div>

          <button className="menu-button" onClick={toggleMenu}>
            <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>

          <div className={`menu-overlay ${isOpen ? "open" : ""}`}>
            <ul className="menu-items">
              {menuData.menuItems.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      <div className="text">
        <h1>{menuData.title}</h1>
      </div>
    </div>
  );
};

export default LeftSide;