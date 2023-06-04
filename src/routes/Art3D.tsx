import code from "../assets/code.png";
import download from "../assets/download.png";
import link from "../assets/link.png";
import donutmilkshake from "../assets/donut.png";

import ActionButton from "../components/ActionButton";

const Page3D = () => {
  return (
    <div className="web-padding">
      <p className="h2-style">Dounut and Milkshake</p>
      <p className="software-style">Blender</p>
      <p className="body-style">
        A spin on the famous Blender Donut! Procedural whipped cream.
      </p>

      <p className="h2-style">Midnight Bonfire</p>
      <p className="software-style">Blender</p>
      <p className="body-style">
        Simulated and stylised fire, smoke, and embers using Manta Flow. I
        created grass and fire embers using the particle emitter.
      </p>

      <p className="h2-style">A Camping Trip</p>
      <p className="software-style">2D animation, digital drawings</p>
      <p className="body-style">
        Created a frame-by-frame animation using a tablet, digital art software,
        and my imagination.
      </p>
    </div>
  );
};

export default Page3D;
