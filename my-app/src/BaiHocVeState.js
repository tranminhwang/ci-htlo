import { useState } from "react";

function BaiHocVeState() {
  console.log("Render");
  const [currentNumber, setCurrentNumber] = useState(0);
  //   const [checked, setChecked] = useState(true);
  //   let checked = true;

  // Render 1 element or 1 component theo 1 dieu kien
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

  //   function kiemTraSoChan(number) {
  //     return number % 2 === 0; // false or true
  //   }

  function congLen_1() {
    setCurrentNumber((prevState) => {
      return prevState + 1;
    });

    // console.log("currentNumber", currentNumber);
    // if (kiemTraSoChan(currentNumber + 1) === true) {
    //   //   setChecked(true);
    //   checked = true;
    // } else {
    //   checked = false;

    //   //   setChecked(false);
    // }
    // console.log("checked line 38", checked);
  }
  // Browser DOM vs Virtual DOM (DOM ảo)

  /*
  1st Render:
     - DOM thật: 
     <div class="App">
        <h1>0 là số chẵn</h1>
        <button style="padding: 8px 24px;">+</button>
     </div>
    - DOM ảo:
     <div class="App">
        <h1>0 là số chẵn</h1>
        <button style="padding: 8px 24px;">+</button>
     </div>

  2st Render:
    - Update DOM ảo
    <div class="App">
        <h1>1 là số chẵn</h1>
        <button style="padding: 8px 24px;">+</button>
     </div>

    - Browser DOM
     <div class="App">
        <h1>0 là số chẵn</h1>
        <button style="padding: 8px 24px;">+</button>
     </div>


     props: cập nhật lại props của React element
     type: tạo lại element mới
  */

  return (
    <>
      <h1 className={currentNumber === 0 ? "so-chan" : "so-le"}>
        {currentNumber === 0 ? <em>so chan</em> : <b>So le ne</b>}
      </h1>
      <button
        style={{
          padding: "8px 24px",
        }}
        onClick={congLen_1}
      >
        +
      </button>
    </>
  );
}

export default BaiHocVeState;
