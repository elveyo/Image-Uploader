import React, { memo } from "react";
import image from "../cloudimage.png";
import "../style/Animation.css";
const Animation = memo((props) => {
  const images = [1, 2, 3, 4, 5];

  return (
    <div className="sky">
      {images.map((img) => {
        const width = Math.floor(Math.random() * 1000);
        const top = Math.floor(Math.random() * 70);
        const left = Math.floor(Math.random() * 60);
        return (
          <img
            src={image}
            width={width}
            style={{ top: top + "%", left: left + "%" }}
          ></img>
        );
      })}
    </div>
  );
});

export default Animation;
