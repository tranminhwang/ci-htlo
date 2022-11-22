import { useState } from "react";

function BaiTapDoiMauXe() {
  // mau hong: https://porsche-vietnam.vn/wp-content/uploads/2021/01/j1-taycan-modelimage-sideshot.png
  // mau xanh duong: https://porsche-vietnam.vn/wp-content/uploads/2020/08/j1-taycan-4s-modelimage-sideshot-1600x900.png

  const [isPink, setIsPink] = useState(true);

  const imagePink =
    "https://porsche-vietnam.vn/wp-content/uploads/2021/01/j1-taycan-modelimage-sideshot.png";
  const imageBlue =
    "https://porsche-vietnam.vn/wp-content/uploads/2020/08/j1-taycan-4s-modelimage-sideshot-1600x900.png";

  return (
    <div>
      <img src={isPink ? imagePink : imageBlue} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: 20,
        }}
      >
        <button
          style={{
            padding: "8px 10px",
            borderRadius: 8,
            background: "pink",
            fontSize: 20,
            fontWeight: "bold",
            color: "#333",
            marginRight: 10,
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => {
            setIsPink(true);
          }}
        >
          Màu hồng
        </button>
        <button
          style={{
            padding: "8px 10px",
            borderRadius: 8,
            background: "#2a4b6d",
            fontSize: 20,
            fontWeight: "bold",
            color: "#ffffff",
            marginRight: 10,
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => {
            setIsPink(false);
          }}
        >
          Màu xanh dương
        </button>
      </div>
    </div>
  );
}

export default BaiTapDoiMauXe;
