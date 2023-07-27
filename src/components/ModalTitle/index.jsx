import "./styles.css";
import expandIcon from "./expand_more.svg";

const ModalTitle = ({ text, className, onClick }) => {
  return (
    <div className={`modalTitle_component ${className}`}>
      {text && <h1>{text}</h1>}
      <button className="expand_button" onClick={onClick}>
        <img src={expandIcon} alt="expand button" />
      </button>
    </div>
  );
};

export default ModalTitle;
