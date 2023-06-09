import "./styles.css";

const HyperLink = ({ text, className, onClick }) => {
  return (
    <p className={`hyperlink ${className}`} onClick={onClick}>
      {text}
    </p>
  );
};

export default HyperLink;
