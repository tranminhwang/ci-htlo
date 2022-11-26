import Header from "./Header";
import ProjectList from "./ProjectList";
import Contact from "./Contact";
import Footer from "./Footer";
import BaiTapDoiMauXe from "./BaiTapDoiMauXe";
import BaiHocVeState from "./BaiHocVeState";
import ColorBox from "./ColorBox";
import MyForm from "./MyForm";
import TodoApp from "./TodoApp";
import { useState } from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoApp />
      {/* <MyForm /> */}
      {/* <ColorBox />
      <BaiTapDoiMauXe /> */}
      {/* <BaiHocVeState /> */}
      {/* <BaiTapDoiMauXe /> */}
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
