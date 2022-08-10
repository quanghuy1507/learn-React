import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";

Colorbox.propTypes = {};

function getRandomColor() {
  const ColorList = ["green", "black", "red", "yellow", "gray"];
  const colorIndex = Math.trunc(Math.random() * 5);
  return ColorList[colorIndex];
}

function Colorbox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box_color") || "pink";
    return initColor;
  });

  const handleColor = () => {
    const newColor = getRandomColor();
    setColor(newColor);

    localStorage.setItem("box_color", newColor);
  };

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleColor}
    ></div>
  );
}

export default Colorbox;
