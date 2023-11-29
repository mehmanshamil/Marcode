import React, { useState } from "react";
import lightOn from "../Image/on.png";
import lightOff from "../Image/off.png";

const ImageToggle = ({ onToggle }) => {
  const [isLightOn, setLightOn] = useState(false);

  const toggleLight = () => {
    setLightOn(!isLightOn);
    onToggle(!isLightOn); 
  };

  return (
    <div style={{ position: "absolute", zIndex: "9999", right: "0rem",width:'3rem', top:'0rem'}}>
      <img
        src={isLightOn ? lightOn : lightOff}
        alt="Light"
        onClick={toggleLight}
        style={{ cursor: "pointer",position: "absolute", zIndex: "9999", right: "19rem",width:'3rem', top:'9rem'}}
      />
    </div>
  );
};

export default ImageToggle;
