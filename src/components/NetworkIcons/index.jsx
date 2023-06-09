import "./styles.css";
const NetworkIcons = ({ icon, alt }) => {
  return (
    <button className="buttonNetworkIcons">
      <img src={icon} alt={alt} />
    </button>
  );
};

export default NetworkIcons;
