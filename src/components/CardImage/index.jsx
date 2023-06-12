import "./styles.css";

const CardImage = ({ ImagemBackground, TextFront, alt }) => {
  return (
    <div className="CardImage">
      <img src={ImagemBackground} alt={alt} />
      <div className="boxText">
        <h2>{TextFront}</h2>
      </div>
    </div>
  );
};

export default CardImage;
