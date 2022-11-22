import { useState } from "react";

function BaiHocVeState() {
  const [currentNumber, setCurrentNumber] = useState(0);
  let checked = true;
  // Render 1 element or 1 component theo 1 dieu kien
  let soChan = false;
  //   let titleElement =
  //     soChan === true ? (
  //       <h1>Hello đây là số chẵn</h1>
  //     ) : (
  //       <h1>Hello đây là số lẻ</h1>
  //     );
  //   let titleElement = (
  //     <h1>Hello đây là {soChan === true ? "Số chẵn" : "số le"}</h1>
  //   );

  // props vs state

  function kiemTraSoChan(number) {
    return number % 2 === 0; // false or true
  }

  function congLen_1() {
    setCurrentNumber(currentNumber + 1);
    if (kiemTraSoChan(currentNumber) === true) {
      checked = true;
    } else {
      checked = false;
    }
    console.log("checked", checked);
  }

  return (
    <div>
      <h1>Hello đây là {checked === true ? "số chẵn" : "số le"}</h1>
      <h2>{currentNumber}</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            padding: "8px 24px",
          }}
          onClick={congLen_1}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default BaiHocVeState;
