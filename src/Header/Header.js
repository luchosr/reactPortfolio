import React from "react";
import "./header.css";
import profile from "../img/profile.jpg";
const Header = () => (
  <div className="main">
    <div className="main__header">
      <div className="main__header__inner">
        <img
          className="main__header__inner__avatar"
          src={profile}
          alt="Luciano's profile image"
        />
      </div>
    </div>
  </div>
);

export default Header;
