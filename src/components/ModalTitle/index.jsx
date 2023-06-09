import "./styles.css";
import expandMoreIcon from "./expand_more.svg";

const ModalTitle = ({ text, className, onClick }) => {
  return (
    <div className={`modalTitle_component ${className}`}>
      {text && <h1>{text}</h1>}
      <button className="expand_more_button" onClick={onClick}>
        <img src={expandMoreIcon} alt="expand more button" />
      </button>
    </div>
  );
};

export default ModalTitle;
