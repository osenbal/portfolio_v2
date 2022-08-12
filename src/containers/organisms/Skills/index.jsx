import React from "react";
import Image1 from "../../../assets/images/svg/technologies-1.svg";
import Image2 from "../../../assets/images/svg/technologies-2.svg";
import Image3 from "../../../assets/images/svg/technologies-3.svg";
import "./index.css";

const data = [
  {
    id: 1,
    image: Image1,
    title: "React JS",
    description:
      "React is a free and open-source front-end JavaScript library. With this technology, my work becomes more efficient",
  },
  {
    id: 2,
    image: Image2,
    title: "Javascript",
    description:
      "JavaScript is a scripting or programming language that allows you to implement complex features on web pages.",
  },
  {
    id: 3,
    image: Image3,
    title: "Node JS",
    description:
      "Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.",
  },
];

function Skills() {
  return (
    <section className="skills container section" id="skills">
      <h2 className="section__title">Learn</h2>

      <div className="skills__container grid">
        {data.map(({ id, image, title, description }) => (
          <div key={id} className="skills__card">
            <img src={image} alt={image} className="skills__img" />
            <h3 className="skills__title">{title}</h3>
            <p className="skills__description">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
