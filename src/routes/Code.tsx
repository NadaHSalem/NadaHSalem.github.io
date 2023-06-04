import code from "../assets/code.png";
import download from "../assets/download.png";
import link from "../assets/link.png";

import ActionButton from "../components/ActionButton";

const PageCode = () => {
  return (
    <div className="web-padding">
      <p className="h2-style">This website</p>
      <p className="skills-style">Typescript, HTML/CSS, React, Bootstrap</p>
      <p className="body-style">
        With the help of React and Bootstap, I created this website you're on
        right now! I wanted to create a public space where I could showcase both
        my technical skills and my love for VFX and Animation.
      </p>

      <p className="h2-style">BeRealocated</p>
      <p className="skills-style">Javascript, HTML/CSS, React, Google API</p>
      <p className="body-style">
        For UofTHacks X, my two friends and I created a web app to fit the theme
        'Epxloration.' The app prompted the user to travel to and take a picture
        at a random location within 24 hours of its reveal. We used Google Maps
        API to create a map display and track the GPS location of the user,
        Firebase API for account creation and data storage, and React packages
        to take photos. The app features an Explore page, allowing users to view
        the 10 latest posts created by other users.
      </p>

      <p className="h2-style">Bruno Mars Rover</p>
      <p className="skills-style">C, Mechanical Design, Report Writing</p>
      <p className="body-style">
        In a team of four, we designed, built, and programmed an EV3 robot using
        C, a series of motors, ultrasonic sensors, gyro sensors, and a
        multiplexer. The robot received a series of button presses from the user
        as "notes" and played instruments in the specified rhythm.
      </p>

      <p className="h2-style">Big Data Challenge</p>
      <p className="skills-style">
        Academic writing, Research, Python, Big Data
      </p>
      <p className="body-style">
        In a team of three, we researched the impact of the Student Nutrition
        Program on academic achievement in Ontario by conducting data analysis
        on demographic data from Open Government Canada Produced an academic
        paper documenting findings and making connections to existing literature
        on international nutrition programs, and published an abstract in the
        STEM Fellowship Journal Placed top 15 teams of 130+ nationally and
        received one of three Kimberley Foundation Prizes
      </p>

      <p className="h2-style">Craft-Themed Subscription Boxes</p>
      <p className="skills-style">
        C++, Object Oriented Programming, Code Documentation
      </p>
      <p className="body-style">
        Created a monthly subscription program for craft supplies that kept
        track of orders, membership details, and stock levels, and applied deals
        to eligible orders. the program also enabled users to create new
        accounts, add or delete subscriptions, and view account information.
      </p>
      <p className="h2-style">Save the Town</p>
      <p className="skills-style">Python, Pygame</p>
      <p className="body-style">
        Programmed a shield game using pygame instructing the user to move the
        mossy platform with their left and right keys to catch the objects
        before they touch the ground Used pygame clocks to keep track of time so
        that the objects dropped faster as time passed Imported font files,
        images, and audio files to enhance the user playing experience
      </p>
    </div>
  );
};

export default PageCode;
