import React from "react";
import profile2 from "../../img/profile/profile2.jpg";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Header = () => (
  <header className="header">
    <div className="profile-block">
      <figure>
        <img
          className="profile-block__avatar"
          src={profile2}
          alt="Luciano's profile"
        />
      </figure>

      <h1 className="profile-block__description">
        <strong>Hi! I'm Luciano</strong>, a Front-end Web Developer enthusiast
        and passionate for new internet technologies.
      </h1>
    </div>
    <div className="social-media">
      <div className="social-media-icon ">
        <a
          className="social-media-icon__link"
          href="https://twitter.com/luchosr10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>
      <div className="social-media-icon ">
        <a
          className="social-media-icon__link"
          href="https://github.com/luchosr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
      <div className="social-media-icon ">
        <a
          className="social-media-icon__link"
          href="mailto:luchosr@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </div>
      <div className="social-media-icon ">
        <a
          className="social-media-icon__link"
          href="https://www.linkedin.com/in/luciano-ramello-b45411143/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </div>
  </header>
);

export default Header;
