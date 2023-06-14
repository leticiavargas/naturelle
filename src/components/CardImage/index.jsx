import "./styles.css";

const CardImage = ({ ImagemBackground, TextFront, alt }) => {
  return (
    <div className="CardImage">
      <img src={ImagemBackground} alt={alt} />
      <div className="boxText"></div>
      <h2 id="teste">{TextFront}</h2>
    </div>
  );
};

export default CardImage;
