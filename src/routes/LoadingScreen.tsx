import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import lightswitch from "../assets/lightswitch.png";
import "./App.css";

const LoadingScreen = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  console.log(mousePosition);
  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
      console.log(mousePosition);
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants1 = {
    default: {
      x: mousePosition.x - 90,
      y: mousePosition.y - 220,
    },
  };
  return (
    <div className="web-padding">
      <motion.div className="cursor" variants={variants1} animate="default" />
      <div className="container">
        <img
          src={lightswitch}
          alt="Light switch"
          className="lightswitch invert"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
