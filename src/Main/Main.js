import React from "react";
import "./main.css";
import first from "../img/projects/first.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Main = () => {
  //const recentWork =

  return (
    <div className="main">
      <section className="main__first">
        <header>
          <h2>
            Actually I am based in Buenos Aires, doing my developments using
            React.js library, Javascript, HTML5 and CSS3.
          </h2>
        </header>
        <p className="main__first__paragraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas,
          libero! Quisquam aut totam odio exercitationem inventore magnam quidem
          mollitia rerum aliquid voluptatem, dolor, numquam eligendi ipsam
          ullam. Officiis, aperiam placeat.
        </p>
        <div className="main__first__paragraph__button">
          <a
            href="https://www.linkedin.com/in/luciano-ramello-b45411143/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
      </section>
      <section className="main__second">
        <h2>Recent Projects</h2>
        <div className="main__second__projects">
          <div className="main__second__projects__item">
            <img
              src={first}
              alt="first project"
              className="main__second__projects__item__img"
            />
            <h3>Project 1</h3>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="main__second__projects__item">
            <img
              src={first}
              alt="first project"
              className="main__second__projects__item__img"
            />
            <h3>Project 2</h3>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="main__second__projects__item">
            <img
              src={first}
              alt="first project"
              className="main__second__projects__item__img"
            />
          </div>
          <h3>Project 3</h3>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="main__first__paragraph__button">
          <a
            href="https://github.com/luchosr"
            target="_blank"
            rel="noopener noreferrer"
          >
            See them on Github
          </a>
        </div>
      </section>
      <section>
        <h2>Get In Touch</h2>
        <p>Feel free to contact me by the following social networks!</p>

        <div className="socialMedia">
          <div className="socialMedia__icon bottom">
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
              href="mailto:luchosr@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </div>
          <div className="socialMedia__icon">
            <a
              href="https://www.linkedin.com/in/luciano-ramello-b45411143/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
