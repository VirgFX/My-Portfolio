import "./home.css";
import React, { useRef } from "react";
import CustomHook from "../6.CUSTOMHOOKS/CustomHook";

const Home = () => {
  const refTab = useRef();
  CustomHook(refTab);
  return (
    <section className="home" ref={refTab}>
      <div className="avatar">
        <div className="card">
          <img className="profile" src="/profile.png" alt="" />
          <div className="info">
            <div className="title1">Front-End Web Developer</div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="name">
          MY NAME IS <span className="virgel">VIRGEL</span>
        </div>
        <div className="des">
          "Crafting seamless digital experiences with innovative code and
          creative design, turning ideas into interactive web realities. Let's
          build together."
        </div>
        <a href="" target="_blank" rel="noopenernoreferrer">
          Download My CV
        </a>
      </div>
    </section>
  );
};

export default Home;
