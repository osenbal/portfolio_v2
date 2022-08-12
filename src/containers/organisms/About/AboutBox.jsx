import React from "react";

function AboutBox() {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon icon-fire"></i>

        <h3 className="about__title">198</h3>
        <span className="about__subtitle">Project Completed</span>
      </div>

      <div className="about__box">
        <i className="about__icon icon-cup"></i>

        <h3 className="about__title">5670</h3>
        <span className="about__subtitle">Cup of coffee</span>
      </div>

      <div className="about__box">
        <i className="about__icon icon-people"></i>

        <h3 className="about__title">427</h3>
        <span className="about__subtitle">Statisfied clients</span>
      </div>

      <div className="about__box">
        <i className="about__icon icon-badge"></i>

        <h3 className="about__title">35</h3>
        <span className="about__subtitle">Nomenees winner</span>
      </div>
    </div>
  );
}

export default AboutBox;
