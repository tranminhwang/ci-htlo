import { useState, useEffect } from "react";

export const useRandomColor = () => {
  const randomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
  const [color, setColor] = useState(randomColor());

  useEffect(() => {
    setInterval(() => {
      setColor(randomColor());
    }, 1000);
  }, []);

  return color;
};
