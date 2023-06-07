import React from "react";
import "./styles.css";
import { BiChevronLeft } from "react-icons/bi";

const Header = ({ title, linkback, type }) => {
  return (
    <div className="header-container">
      <a href={linkback}>
        <div className="header-icon">
          <BiChevronLeft />
        </div>
      </a>
      <div
        className={
          type === "secondary" ? "header-title-secondary" : "header-title"
        }
      >
        {title}
      </div>
    </div>
  );
};

export default Header;
