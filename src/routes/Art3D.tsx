import ReactPlayer from "react-player";

import "bootstrap/dist/css/bootstrap.min.css";

import blender from "../assets/blender.png";
import milkshake from "../assets/donut.png";
import campfire from "../assets/fireanim.gif";
import procreate from "../assets/procreate.png";
import lightsrc from "../assets/lightsrc.png";

const Page3D = () => {
  return (
    <div className="web-padding">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="p-3">
              <p className="h2-style">
                Dounut and Milkshake
                <img
                  src={blender}
                  alt="Blender Icon"
                  className="skills-icon-style"
                />
              </p>
              <br></br>
              <p className="body-style">
                A spin on the famous Blender Donut! Procedural whipped cream.
              </p>
              <div className="background-orb">
                <img
                  src={milkshake}
                  alt="Blender Milkshake and Donut"
                  className="art-sizing"
                />
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="p-3">
              <p className="h2-style">
                Midnight Bonfire
                <img
                  src={blender}
                  alt="Blender Icon"
                  className="skills-icon-style"
                />
              </p>
              <br></br>
              <p className="body-style">
                Simulated and stylised fire, smoke, and embers using Manta Flow.
                I created grass and fire embers using the particle emitter.
              </p>
              <div className="temp-padding">
                <img src={campfire} className="gif-sizing" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <div className="p-3">
              <p className="h2-style">
                A Camping "Trip"
                <img
                  src={procreate}
                  alt="Procreate Icon"
                  className="skills-icon-style"
                />
              </p>
              <br></br>
              <p className="body-style">
                Created a frame-by-frame animation using a tablet and digital
                art software.
              </p>
              <ReactPlayer
                playing
                url="campingtrip.mp4"
                height="auto"
                width="500px"
                controls={true}
                light={
                  <img src={lightsrc} alt="Thumbnail" className="thumbnail" />
                }
                fileConfig={{
                  attributes: {
                    style: {
                      display: "block",
                      width: "auto",
                      height: "auto",
                    },
                  },
                }}
              />
            </div>
          </div>
          <div className="col-sm">
            <div className="p-3">
              <p className="h2-style">Clay & Found Things</p>
              <br></br>
              <p className="body-style">
                A collection of the earrings I've made with clay, wire, beads,
                and embroidery string.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <div className="p-3">
              <p className="h2-style">Crochet</p>
              <br></br>
              <p className="body-style">Blankets, bags, wall decor!</p>
            </div>
          </div>
          <div className="col-sm">
            <div className="p-3">
              <p className="h2-style">Sketching</p>
              <br></br>
              <p className="body-style">
                Some traditional artwork made with paper and pencil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3D;
