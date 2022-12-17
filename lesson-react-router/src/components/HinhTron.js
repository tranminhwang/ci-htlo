import { useRandomColor } from "../hooks/customHook";

const HinhTron = () => {
  const color = useRandomColor();
  return (
    <div
      style={{
        background: color,
        width: 300,
        height: 300,
        borderRadius: "50%",
      }}
    ></div>
  );
};

export default HinhTron;
