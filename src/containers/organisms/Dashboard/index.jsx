import React from "react";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
import Me from "../../../assets/images/svg/avatar-1.svg";

import "./index.css";

function Dashboard() {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="avatar me" className="home__img" />
        <h1 className="home__name">Iqbal Maulana</h1>
        <span className="home__education">I'm a Front-End developer</span>
        <HeaderSocials />

        <a href="#contact" className="btn">
          Hire Me
        </a>

        <ScrollDown />
      </div>

      <Shapes />
    </section>
  );
}

export default Dashboard;
