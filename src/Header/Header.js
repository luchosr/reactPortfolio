import React from "react";
import "./header.css";
import profile from "../img/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
const Header = () => (
  <div className="container">
    <div className="header">
      <div className="header__inner">
        <img
          className="header__inner__avatar"
          src={profile}
          alt="Luciano's profile"
        />
        <h1>
          <strong>Hi! I'm Luciano</strong>, a Front-end Web Developer enthusiast
          and passionate for new internet technologies.
        </h1>
      </div>
      <div className="socialMedia">
        <div className="socialMedia__icon">
          {" "}
          <a
            href="https://twitter.com/luchosr10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
        <div className="socialMedia__icon">
          <a
            href="https://github.com/luchosr"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>{" "}
        <div className="socialMedia__icon">
          <a
            href="mailto:luchosr@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </div>
        <div className="socialMedia__icon">
          {" "}
          <a
            href="https://www.linkedin.com/in/luciano-ramello-b45411143/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
