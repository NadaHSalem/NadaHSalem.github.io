import React from "react";
import code from "../assets/code.png";
import download from "../assets/download.png";
import link from "../assets/link.png";

interface Props {
  iconType: string;
  redirectLink: string;
}

function ActionButton({ iconType, redirectLink }: Props) {
  return (
    <div>
      <a href={redirectLink} target="_blank">
        <div>
          <img
            src={`./src/assets/${iconType}.png`}
            alt={`${iconType} Icon`}
            className="small-icon-style invert"
          />
        </div>
      </a>
    </div>
  );
}

export default ActionButton;
