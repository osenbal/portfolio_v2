import React, { useState } from "react";
import Logo from "../../assets/images/svg/logo.svg";
import "./index.css";

function Slidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenSlide = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div onClick={() => handleOpenSlide()} className="hamburger">
        <i className="fa-solid fa-angles-down"></i>
      </div>
      <aside className={`aside ${isOpen ? "openSlide" : ""}`}>
        <a href="#home" className="nav__logo">
          <img src={Logo} alt="Logo" />
        </a>

        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <i className="icon-home"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="icon-user-following"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <i className="icon-layers"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#resume" className="nav__link">
                  <i className="icon-graduation"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#portfolio" className="nav__link">
                  <i className="icon-briefcase"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#blog" className="nav__link">
                  <i className="icon-note"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="icon-bubble"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav__footer">
          <span className="copyright">&copy; 2022 - 2023.</span>
        </div>
        <div onClick={() => handleOpenSlide()} className="hamburger-up">
          <i className="fa-solid fa-arrow-up-short-wide"></i>
        </div>
      </aside>
    </>
  );
}

export default Slidebar;
