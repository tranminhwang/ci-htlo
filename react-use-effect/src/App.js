import React, { useEffect, useState } from "react";
import ClassComponent from "./ClassComponent";
import WorldCupDashboard from "./FifaDashboard";
import FunctionComponent from "./FunctionComponent";
import ScrollComponent from "./ScrollComponent";

const App = () => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);

  // useEffect for update title
  // useEffect(() => {
  //   console.log("Effect update title runs");
  //   if (count <= 5) {
  //     document.title = `Lesson use effects ${count}`;
  //   }
  // }, [count]);

  const onIncreaseCount = () => setCount((prev) => prev + 1);
  const onToggleScrollComponent = () => setVisible((prev) => !prev);
  // console.log("Render");
  return (
    <div
    // style={{
    //   height: "200vh",
    // }}
    >
      {/* {visible && <ScrollComponent />}
      <button onClick={onToggleScrollComponent}>
        Toggle Scroll ScrollComponent
      </button>
      <h2>Lesson Use Effect</h2>
      <p>Count: {count}</p>
      <button onClick={onIncreaseCount}>Click</button> */}
      {/* <ClassComponent /> */}
      {/* <FunctionComponent /> */}

      <WorldCupDashboard />
    </div>
  );
};

export default App;

/*
  Lifecycle ReactJS
    1. Mounting
      + Render lần đầu tiên
      + useEffect run sau lần render đầu tiên
        => empty dependencies
        Fetch data

    2. Updating
      + render 
      + effect chạy có điều kiện
    3. Unmounting
      + effect with clean up


    - Use effect được thực thi sau mỗi lần render (without deps)
    - use effect được thực thi sau lần render đầu tiên ([ ])
    - Use effect có điều kiện khi [count] 

    - Lưu ý: cleanup tất cả những hàm như: interval, timeout, listener 
    => trước khi component unmounting
*/
