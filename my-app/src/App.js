import Header from "./Header";
import ProjectList from "./ProjectList";
import Contact from "./Contact";
import Footer from "./Footer";
import BaiTapDoiMauXe from "./BaiTapDoiMauXe";
import BaiHocVeState from "./BaiHocVeState";
import ColorBox from "./ColorBox";
import MyForm from "./MyForm";
import TodoApp from "./TodoApp";
// import Modal from "./Modal";
import { ContextDemoProvider } from "./ContextDemo";
// import projectData from "./mockData/productMock";
import { useEffect, useState } from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <TodoApp /> */}
      {/* <MyForm /> */}
      {/* <ColorBox />
      <BaiTapDoiMauXe /> */}
      {/* <BaiHocVeState /> */}
      {/* <BaiTapDoiMauXe /> */}

      {/* <section id="welcome-section" className="welcome-section">
        <h1>Hey I am mindXer</h1>
        <p>A Full Stack Web Developer</p>
      </section> */}
      <ContextDemoProvider>
        <Header />
        <ProjectList />
      </ContextDemoProvider>
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
