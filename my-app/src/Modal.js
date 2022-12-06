import { useContext } from "react";
import { ContextDemo } from "./ContextDemo";

import "./Modal.css";

const Modal = () => {
  const { setIsOpen } = useContext(ContextDemo);
  return (
    <div className="modal-wrapper">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Title</h3>
          <span onClick={() => setIsOpen(false)}>X</span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
