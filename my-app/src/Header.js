import { useContext } from "react";
import Modal from "./Modal";
import { ContextDemo } from "./ContextDemo";
import "./Header.css";

function Header() {
  const { counter, isOpen, setIsOpen } = useContext(ContextDemo);

  return (
    <>
      <nav id="navbar">
        <ul className="nav">
          <li className="logo">
            <a href="#logo">mindX School</a>
          </li>
          <li className="item">
            <a href="#welcome-section">About</a>
          </li>
          <li className="item">
            <a href="#projects">Project</a>
          </li>
          <li className="item">
            <a href="#contact">Contact</a>
          </li>
          <li className="item button">
            <a href="#">Log In</a>
          </li>
          <li
            className="item button secondary"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <a href="#">{counter} item</a>
          </li>
        </ul>
      </nav>
      {isOpen ? <Modal /> : null}
    </>
  );
}

export default Header;
