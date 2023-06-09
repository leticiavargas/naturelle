import { useEffect, useRef, useState } from "react";

import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

import "./Collapsible.css";

const Collapsible = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const ref = useRef(null);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    isOpen
      ? setHeight(`${ref.current.getBoundingClientRect().height}px`)
      : setHeight("0px");
  }, [isOpen]);
  return (
    <div className="collapsibleSection">
      <button onClick={toggle} className="collapsibleLabel">
        {label} {isOpen ? <AiOutlineUp /> : <AiOutlineDown />}
      </button>
      {isOpen && (
        <div className="collapsibleContent" style={{ height: height }}>
          <div ref={ref}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Collapsible;
