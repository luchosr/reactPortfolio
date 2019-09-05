import React from "react";
import profile2 from "../img/profile2.jpg";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Header = () => (
  <aside className="header">
    <div className="header__inner">
      <figure>
        <img
          className="header__inner__avatar"
          src={profile2}
          alt="Luciano's profile"
        />
      </figure>

      <h1 className="header__inner__description">
        <strong>Hi! I'm Luciano</strong>, a Front-end Web Developer enthusiast
        and passionate for new internet technologies.
      </h1>
    </div>
    <div className="socialMedia">
      <div className="socialMedia__icon ">
        <a
          className="socialMedia__icon__link"
          href="https://twitter.com/luchosr10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>
      <div className="socialMedia__icon ">
        <a
          className="socialMedia__icon__link"
          href="https://github.com/luchosr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
      <div className="socialMedia__icon ">
        <a
          className="socialMedia__icon__link"
          href="mailto:luchosr@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </div>
      <div className="socialMedia__icon ">
        <a
          className="socialMedia__icon__link"
          href="https://www.linkedin.com/in/luciano-ramello-b45411143/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </div>
  </aside>
);

export default Header;
