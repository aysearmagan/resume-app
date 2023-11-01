import React from "react";
import "./style.css";
import About from "./about";
import Experience from "./common/experience";
import Experiences from "./experiences";
import Education from "./education";
import Testimonals from "./testimonals";

const Main = () => {
  return (
    <div className="main-content pull-right">
      <About />
      <Experiences />
      <Education/>
      <Testimonals/>
    </div>
  );
};

export default Main;
