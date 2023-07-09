import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "./App.css";

import gmail from "./assets/gmail.png";
import linkedin from "./assets/linkedin.png";
import github from "./assets/git.png";

function App() {
  return (
    <div className="web-padding">
      <p className="h1-style">Hi! I'm Nada Salem</p>
      <p className="h2-style"> Welcome to my website :{")"}</p>
      <br></br>
      <p className="home-body-style">
        I'm a Mechatronics Student at the University of Waterloo in my 1B co-op
        term. This website features some of my code, mechanical design projects,
        and art!
      </p>
      <div className="col flex-col d-flex justify-content-center">
        <a href="https://www.linkedin.com/in/nada-h-salem/" target="_blank">
          <img src={linkedin} alt="LinkedIn Icon" className="icon-style" />
        </a>
        <a href="https://github.com/NadaHSalem" target="_blank">
          <img src={github} alt="GitHhub Icon" className="icon-style invert" />
        </a>
        {/* <a href="https://github.com/NadaHSalem" target="_blank">
          <img src={gmail} alt="Gmail Icon" className="icon-style" />
        </a> */}
      </div>
    </div>
  );
}

export default App;
