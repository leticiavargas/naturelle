import "./styles.css";

const CircleMarker = ({ isActive }) => {
  return (
    <div className="externalCircle">
      {isActive && <div className="internalCircle"></div>}
    </div>
  );
};

export default CircleMarker;
