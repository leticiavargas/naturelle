import "./styles.css";
const IconButton = ({ icon, alt, onClick }) => {
  return (
    <button className="buttonIcon" onClick={onClick}>
      <img src={icon} alt={alt} />
    </button>
  );
};

export default IconButton;
