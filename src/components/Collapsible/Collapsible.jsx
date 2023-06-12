import { useEffect, useRef, useState } from "react";

import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

import "./Collapsible.css";

const Collapsible = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    isOpen
      ? setHeight(ref.current.getBoundingClientRect().height)
      : setHeight(0);
  }, [isOpen]);
  return (
    <div className="collapsibleSection">
      <button onClick={toggle} className="collapsibleLabel">
        {label} {isOpen ? <AiOutlineUp /> : <AiOutlineDown />}
      </button>
      {isOpen && (
        <div className="collapsibleContent" style={{ height: `${height}px` }}>
          <div ref={ref}>{children}</div>
        </div>
      )}
    </div>
  );
};

export default Collapsible;
