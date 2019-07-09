import React from "react";
import "./main.css";
import first from "../img/projects/first.jpg";

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
          <a href="">Learn More</a>
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
      </section>
    </div>
  );
};

export default Main;
