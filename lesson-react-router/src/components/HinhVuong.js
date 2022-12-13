import { useRandomColor } from "./customHook";

const HinhVuong = () => {
  const color = useRandomColor();
  return (
    <div
      style={{
        background: color,
        width: 300,
        height: 300,
      }}
    ></div>
  );
};

export default HinhVuong;
