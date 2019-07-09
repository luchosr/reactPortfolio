import React from "react";
import "./main.css";

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
        <div className="main__secod__projects">
          <div className="main__secod__projects__item" />
          <div className="main__secod__projects__item" />
          <div className="main__secod__projects__item" />
        </div>
      </section>
    </div>
  );
};

export default Main;
