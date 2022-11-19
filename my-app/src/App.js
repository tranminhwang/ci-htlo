import Header from "./Header";
import ProjectList from "./ProjectList";
import Contact from "./Contact";
import Footer from "./Footer";

import { useState } from "react";

import "./App.css";

function App() {
  let [currentCount, setCurrentCount] = useState(0);
  console.log(currentCount);

  const cong = () => {
    currentCount += 1;
    setCurrentCount(currentCount);
  };
  const tru = () => {
    currentCount -= 1;
    setCurrentCount(currentCount);
  };

  return (
    <div className="App">
      <h1 className="counter">{currentCount}</h1>
      <button onClick={cong}>+</button>
      <button onClick={tru}>-</button>
      {/* <Header />
      <section id="welcome-section" className="welcome-section">
        <h1>Hey I am mindXer</h1>
        <p>A Full Stack Web Developer</p>
      </section>
      <ProjectList />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
