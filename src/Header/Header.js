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
        <h1>
          <strong>Hi! I'm Luciano</strong>, a Front-end Web Developer enthusiast
          and passionate for new internet technologies.
        </h1>
      </div>
    </div>
  </div>
);

export default Header;
