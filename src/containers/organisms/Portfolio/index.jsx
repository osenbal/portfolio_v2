/* eslint-disable */
import React, { useState } from "react";

import Menu from "./Menu";
import "./index.css";

function Portfolio() {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });

    setItems(updatedItems);
  };
  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title">Recent Work</h2>

      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>
          Everything
        </span>
        <span className="work__item" onClick={() => filterItem("Development")}>
          Development
        </span>
        <span className="work__item" onClick={() => filterItem("Design")}>
          Design
        </span>
      </div>

      <div className="work__container grid">
        {items.map((item) => {
          const { id, image, title, category, url } = item;

          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt={title} className="work__img" />
                <div className="work__mask"></div>
              </div>
              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a
                target="_blank"
                href={url}
                rel="noopener noreferrer"
                className="work__button"
              >
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
