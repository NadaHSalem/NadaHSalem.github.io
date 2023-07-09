import "../App.css";

import html from "../assets/html.png";
import reactlogo from "../assets/react.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import c from "../assets/c.png";
import cplusplus from "../assets/c++.png";
import pygame from "../assets/pygame.png";
import python from "../assets/python.png";
import data from "../assets/data.png";
import json from "../assets/json.png";
import qt from "../assets/qt.png";

const PageCode = () => {
  return (
    <div className="web-padding">
      <div className="row">
        <div className="col-8">
          <p className="h2-style">This website </p>
        </div>
        <div className="col-4 d-flex flex-row justify-content-end p-1">
          <img src={html} alt="HTML Icon" className="skills-icon-style" />
          <img src={css} alt="CSS Icon" className="skills-icon-style" />
          <img src={js} alt="JS Icon" className="skills-icon-style" />
          <img src={reactlogo} alt="React Icon" className="skills-icon-style" />
        </div>
      </div>
      <br></br>
      <p className="body-style">
        With the help of React and Bootstap, I created this website you're on
        right now! I wanted to create a public space where I could showcase both
        my technical skills and some of my art.
      </p>
      {/* <div className="row">
        <div className="col-8">
          <p className="h2-style">Jayson</p>
        </div>
        <div className="col-4 d-flex flex-row justify-content-end p-1">
          <img src={python} alt="Python Icon" className="skills-icon-style" />
          <img
            src={json}
            alt="JSON Icon"
            className="skills-icon-style invert"
          />
          <img src={qt} alt="QtDesigner Logo" className="skills-icon-style" />
        </div>
      </div>
      <br></br>
      <p className="body-style">
        Jayson turns a series of prompts and completions into .JSONL files to
        create training sets for Azure OpenAI.
      </p> */}
      <div className="row">
        <div className="col-8">
          <p className="h2-style">BeRealocated </p>
        </div>
        <div className="col-4 d-flex flex-row justify-content-end p-1">
          <img src={html} alt="HTML Icon" className="skills-icon-style" />
          <img src={css} alt="CSS Icon" className="skills-icon-style" />
          <img src={js} alt="JS Icon" className="skills-icon-style" />
          <img src={reactlogo} alt="React Icon" className="skills-icon-style" />
        </div>
      </div>
      <br></br>
      <p className="body-style">
        For UofTHacks X, my two friends and I created a web app to fit the theme
        'Exploration.' The app prompted the user to travel to and take a picture
        at a random location within 24 hours of its reveal. We used Google Maps
        API to create a map display and track the GPS location of the user,
        Firebase API for account creation and data storage, and React packages
        to take photos. The app features an Explore page, allowing users to view
        the 10 latest posts created by other users. View our{" "}
        <a
          href="https://devpost.com/software/berealocated"
          target="blank"
          className="ext"
        >
          DevPost
        </a>{" "}
        or{" "}
        <a
          href="https://github.com/NadaHSalem/BeRealocated"
          target="blank"
          className="ext"
        >
          GitHub repository!
        </a>
      </p>
      <div className="row">
        <div className="col-8">
          <p className="h2-style">Bruno Mars Rover</p>
        </div>
        <div className="col-4 d-flex flex-row justify-content-end p-1">
          <img src={c} alt="C Icon" className="skills-icon-style" />
        </div>
      </div>
      <br></br>
      <p className="body-style">
        In a team of four, we designed, built, and programmed an EV3 robot using
        C, a series of motors, ultrasonic sensors, gyro sensors, and a
        multiplexer. The robot received a series of button presses from the user
        as "notes" and played instruments in the specified rhythm.
      </p>
      <div className="row">
        <div className="col-8">
          <p className="h2-style">Big Data Challenge</p>
        </div>
        <div className="col-4 d-flex flex-row justify-content-end p-1">
          <img src={python} alt="Python Icon" className="skills-icon-style" />
          <img
            src={data}
            alt="Big Data Icon"
            className="skills-icon-style invert"
          />
        </div>
      </div>
      <br></br>
      <p className="body-style">
        In a team of four, we researched the impact of the Student Nutrition
        Program on academic achievement in Ontario by conducting data analysis
        on demographic data from Open Government Canada Produced an academic
        paper documenting findings and making connections to existing literature
        on international nutrition programs, and published an abstract in the
        STEM Fellowship Journal Placed top 15 teams of 130+ nationally and
        received one of three Kimberley Foundation Prizes. You can read our
        paper and view our video submission{" "}
        <a
          href="https://www.stemfellowship.org/case-study/2020-2021-national-high-school-big-data-challenge/?portfolioCats=151#:~:text=The%20Impact%20of,Haig%20Secondary%20School"
          target="_blank"
          className="ext"
        >
          here!
        </a>
      </p>

      <div className="row">
        <div className="col-8">
          <p className="h2-style">Craft-Themed Subscription Boxes</p>
        </div>
        <div className="col-4 d-flex flex-row justify-content-end p-1">
          <img src={cplusplus} alt="C++ Icon" className="skills-icon-style" />
        </div>
      </div>
      <br></br>
      <p className="body-style">
        Created a monthly subscription program for craft supplies that kept
        track of orders, membership details, and stock levels, and applied deals
        to eligible orders. The program also enabled users to create new
        accounts, add or delete subscriptions, and view account information.
      </p>
      <div className="row">
        <div className="col-8">
          <p className="h2-style">Save the Town</p>
        </div>
        <div className="col-4 d-flex flex-row justify-content-end p-1">
          <img src={python} alt="Python Icon" className="skills-icon-style" />
        </div>
      </div>
      <br></br>
      <p className="body-style">
        Programmed a shield game using pygame instructing the user to move the
        mossy platform with their left and right keys to catch the objects
        before they touch the ground Used pygame clocks to keep track of time so
        that the objects dropped faster as time passed Imported font files,
        images, and audio files to enhance the user playing experience.
      </p>
    </div>
  );
};

export default PageCode;
