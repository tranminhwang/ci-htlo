import { useRandomColor } from "./customHook";

const HinhTamGiac = () => {
  const color = useRandomColor();
  return (
    <div
      style={{
        width: 0,
        height: 0,
        borderLeft: "300px solid transparent",
        borderRight: "300px solid transparent",
        borderBottom: `300px solid ${color}`,
      }}
    ></div>
  );
};

export default HinhTamGiac;
