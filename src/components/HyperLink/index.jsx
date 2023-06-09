import "./styles.css";
import { NavLink } from "react-router-dom";

const HyperLink = ({ text, className, toLink = "#" }) => {
  return (
    <div className={`hyperlink_container ${className}`}>
      {text && (
        <NavLink to={toLink}>
          <p>{text}</p>
        </NavLink>
      )}
    </div>
  );
};

export default HyperLink;
