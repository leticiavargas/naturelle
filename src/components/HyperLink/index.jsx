import "./styles.css";
import { Link } from "react-router-dom";

const HyperLink = ({ text, className, toLink = "#", onClick }) => {
  return (
    <div className={`hyperlink_container ${className}`}>
      {text && (
        <Link to={toLink} onClick={onClick}>
          <p>{text}</p>
        </Link>
      )}
    </div>
  );
};

export default HyperLink;
