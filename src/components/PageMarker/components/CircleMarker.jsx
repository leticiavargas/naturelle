import "./styles.css";

const CircleMarker = ({ isActive }) => {
  return (
    <div className="externalCircle pageMakerContainerBackground">
      {isActive && <div className="internalCircle"></div>}
    </div>
  );
};

export default CircleMarker;
