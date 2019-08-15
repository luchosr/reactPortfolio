import React from "react";
import "./main.css";
import fakeMDN from "../img/projects/fakeMDN.png";
import initab from "../img/projects/initab.png";
import superMarketList from "../img/projects/superMarketList.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Main = () => {
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
          I usually perceive myself as a person with a
          <strong> lot of curiosity and astonishment capacity</strong>, when I
          am not working on my projects, I'm usually swimming, going to the
          theater or volunteering. I am currently developing as a co-organizer
          of freeCodeCamp Buenos Aires by stimulating web programming learning (
          also learning in the process) and as an organizer of the Bitcoin
          Argentina NGO spreading the qualities of Bitcoin and decentralized
          consensus systems.
        </p>
        <div className="main__first__paragraph__button brown">
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
            <a
              href="https://initabclone.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={initab}
                alt="initab clone"
                className="main__second__projects__item__img"
              />
            </a>
            <h3> Initab Clone</h3>
            <p>
              {" "}
              A hand made clone of initab extension, using React.js, React Hooks
              and Local Storage persistence.{" "}
            </p>
          </div>
          <div className="main__second__projects__item">
            <a
              href="https://supermarketlist.netlify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={superMarketList}
                alt="first project"
                className="main__second__projects__item__img"
              />
            </a>

            <h3>Super Market List</h3>
            <p>
              {" "}
              A list App made using React.js, using memory storage, and working
              with a simulated API REST.
            </p>
          </div>

          <div className="main__second__projects__item">
            <a
              href="https://eebalcarcel.github.io/project-one-fakemdn/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src={fakeMDN}
                alt="first project"
                className="main__second__projects__item__img"
              />
            </a>
          </div>
          <h3>Fake MDN</h3>
          <p>
            {" "}
            A Mozilla Developer Network clone made in collaboration with 2
            developers.
          </p>
        </div>
        <div className="main__first__paragraph__button brown">
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

        <div className="brown socialMedia">
          <div className=" socialMedia__icon bottom">
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
