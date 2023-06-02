import React from "react";
import "./styles.css";
import { BiChevronLeft } from "react-icons/bi";

const Header = ({ title, linkback }) => {
  return (
    <div className="header-container">
      <a href={linkback}>
        <div className="header-icon">
          <BiChevronLeft />
        </div>
      </a>
      <div className="header-title">{title}</div>
      {/* Existe a classe header-title: para uso institucional 
      header-title-secondary: para uso na prateleira  */}
    </div>
  );
};

export default Header;
