import React from "react";
import Image from "../../../assets/images/svg/avatar-2.svg";

import "./index.css";

function About() {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={Image} alt="about" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am Iqbal Maulana, web developer from Jakarta, Indonesia. I have
              enough experience in web building and customization, also I am
              like photography.
            </p>
            <a
              href="https://drive.google.com/file/d/1yCv4pt9ex5lRGnkS6koCAUPrnPxFI9qp/view?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
              className="btn"
            >
              Download CV
            </a>
          </div>
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Developments</h3>
                <span className="skills__number">60%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI Design</h3>
                <span className="skills__number">50%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Photography</h3>
                <span className="skills__number">40%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage photography"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <AboutBox /> */}
    </section>
  );
}

export default About;
