import "./skills.css";
import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faNodeJs,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import CustomHook from "../6.CUSTOMHOOKS/CustomHook";

const Skills = () => {
  const [listSkills] = useState([
    {
      name: "HTML",
      des: "Proficient in HTML, I craft the structural foundation of web applications. With a strong understanding of semantic markup and accessibility standards, I ensure that websites are not only well-organized but also user-friendly and easily navigable for all users.",
      icon: faHtml5,
      className: "skill-html",
    },
    {
      name: "CSS",
      des: "Expert in CSS, I bring designs to life with precise styling and responsive layouts. Utilizing modern techniques like Flexbox and Grid, I create visually appealing and adaptable websites that maintain consistency across various devices and screen sizes.",
      icon: faCss3,
      className: "skill-css",
    },
    {
      name: "JavaScript",
      des: "Skilled in JavaScript, I develop dynamic and interactive web experiences. From manipulating the DOM to integrating APIs, my expertise allows me to enhance user engagement and create seamless functionality within web applications, ensuring a robust and responsive interface.",
      icon: faJs,
      className: "skill-javascript",
    },
    {
      name: "GitHub",
      des: "Experienced with GitHub, I manage version control and collaborate effectively on projects. Proficient in branching, merging, and pull requests, I ensure that code is systematically organized, reviewed, and integrated, facilitating smooth teamwork and project management.",
      icon: faGithub,
      className: "skill-github",
    },
    {
      name: "Node.js",
      des: "Proficient in Node.js, I build efficient and scalable server-side applications. Leveraging its event-driven architecture and non-blocking I/O, I develop backend systems that handle multiple connections simultaneously, ensuring high performance and reliability for web services.",
      icon: faNodeJs,
      className: "skill-node-js",
    },
    {
      name: "React",
      des: "Expert in React, I create interactive and component-based user interfaces. Utilizing state management and lifecycle methods, I build dynamic web applications that offer a seamless user experience, with reusable components that streamline development and enhance maintainability.",
      icon: faReact,
      className: "skill-react",
    },
  ]);
  const refTab = useRef(null);
  const refDivs = useRef([]);
  CustomHook(refTab, refDivs);
  return (
    <section className="skills" ref={refTab}>
      <div className="title2" ref={(el) => el && refDivs.current.push(el)}>
        Here are the key abilities I bring to every project :
      </div>
      <div className="list">
        {listSkills.map((value, key) => (
          <div
            key={key}
            className={`item ${value.className}`}
            ref={(el) => el && refDivs.current.push(el)}
          >
            <FontAwesomeIcon icon={value.icon} />
            <h3 className="skill-name">{value.name}</h3>
            <div className="line"></div>
            <div className="des1">{value.des}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
