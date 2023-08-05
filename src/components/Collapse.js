import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

function Collapse({ id, title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <div className="collapse-component" id={id}>
        <div className="collapse-header" onClick={toggle}>
          <h2>{title}</h2>
          <div className="collapse-icon">
            {isOpen ? <FaAngleDown /> : <FaAngleUp />}
          </div>
        </div>
        {isOpen && <div className="collapse-body">{children}</div>}
      </div>
    </div>
  );
}

export default Collapse;
