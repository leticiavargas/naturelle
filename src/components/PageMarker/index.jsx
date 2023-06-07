import "./styles.css";
import CircleMarker from "./components/CircleMarker";

const PageMarker = ({ numOfPages, atualPage }) => {
  const renderMarkers = () => {
    const markers = [];

    for (let i = 0; i < numOfPages; i++) {
      if (atualPage - 1 === i) {
        markers.push(<CircleMarker isActive />);
      } else {
        markers.push(<CircleMarker />);
      }
    }

    return markers;
  };

  return (
    <div className="pageMakerContainer">
      <div className="line"></div>
      <div className="markers">{renderMarkers()}</div>
    </div>
  );
};

export default PageMarker;
