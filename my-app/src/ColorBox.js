import { useState } from "react";

import "./ColorBox.css";

function randomColor() {
  const list_color = ["white", "red", "green", "blue", "black", "yellow"];
  // .                  0       1       2       3       4        5
  const randomIndex = Math.floor(Math.random() * list_color.length);
  return list_color[randomIndex];
}

function ColorBox() {
  let [myColor, setMyColor] = useState("red");

  const onChangeColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setMyColor(`rgb(${r}, ${g}, ${b})`);
    // setMyColor(randomColor());
  };

  return (
    <div
      className="mybox"
      onClick={onChangeColor}
      style={{
        backgroundColor: myColor,
      }}
    ></div>
  );
}

export default ColorBox;
