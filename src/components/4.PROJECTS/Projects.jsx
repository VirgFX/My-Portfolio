import "./projects.css";
import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonCircleQuestion,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";
import CustomHook from "../6.CUSTOMHOOKS/CustomHook";

const Projects = () => {
  const [listProjects] = useState([
    {
      name: "Nike Footwear: Performance and Style",
      des: "Welcome to our Nike store! Discover the latest in sportswear, footwear, and accessories. Shop top-quality products designed for performance and style. Whether you're an athlete or a fitness enthusiast, find everything you need to elevate your game. Experience the Nike difference with innovative designs and unparalleled comfort.",
      mission: "Front-End Developer, system analysis and design.",
      language: "HTML5,CSS3,React Js, Nextjs Figma, TailwindCSS ....",
      images: "/nike-website.png",
    },
    {
      name: "ChatterSpace: Real-Time Connections",
      des: "ChatterSpace is your gateway to seamless and engaging real-time conversations. Connect instantly with friends, family, and colleagues through our intuitive and dynamic chat platform. ",
      mission: "Front-End Developer, system analysis and design.",
      language: "HTML5,CSS3,React Js, Figma, Firebase,TailwindCSS....",
      images: "/chatterSpace.png",
    },
    {
      name: "Horizon",
      des: "Introducing Horizon Banking App – your ultimate financial companion. Seamlessly responsive across all devices, it ensures secure, efficient, and user-friendly banking at your fingertips. Manage accounts, transfer funds, and track expenses with ease. Horizon Banking App: banking reimagined for a modern, connected lifestyle. Download now and elevate your banking experience.",
      mission: "Front-End Developer, system analysis and design.",
      language: "HTML5,CSS3,React Js, Nextjs Figma,TailwindCSS....",
      images: "/HorizonBanking.png",
    },
  ]);
  const refTab = useRef(null);
  const refDivs = useRef([]);
  CustomHook(refTab, refDivs);

  return (
    <section className="projects" ref={refTab}>
      <div className="title2" ref={(el) => el && refDivs.current.push(el)}>
        Here are my website, crafted with professionalism :
      </div>
      <div className="list3" ref={(el) => el && refDivs.current.push(el)}>
        {listProjects.map((value, key) => (
          <div key={key} className="item3">
            <div
              className="images"
              ref={(el) => el && refDivs.current.push(el)}
            >
              <img src={value.images} alt="" />
            </div>
            <div
              className="content3"
              ref={(el) => el && refDivs.current.push(el)}
            >
              <h3 className="h-3">{value.name}</h3>
              <div className="des3">{value.des}</div>
              <div
                className="mission"
                ref={(el) => el && refDivs.current.push(el)}
              >
                <div>
                  <FontAwesomeIcon icon={faPersonCircleQuestion} />
                </div>
                <div>
                  <h4>Mission</h4>
                  <div className="des3-1">{value.mission}</div>
                </div>
              </div>
              <div
                className="mission"
                ref={(el) => el && refDivs.current.push(el)}
              >
                <div>
                  <FontAwesomeIcon icon={faEarthAmericas} />
                </div>
                <div>
                  <h4>Languages</h4>
                  <div className="des3-1">{value.language}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;