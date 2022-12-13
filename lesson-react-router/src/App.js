import { Routes, Route } from "react-router-dom";

import DetailUser from "./components/DetailUser";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import ListUser from "./components/ListUser";
import NotFound from "./components/NotFound";
import PrivateRoutes from "./components/PrivateRoutes";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/list-users" element={<ListUser />} />
          <Route path="/list-users/:userId" element={<DetailUser />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
