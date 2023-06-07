import "./styles.css";

const CardImage = ({ ImagemBackground, TextFront }) => {
  return (
    <div className="CardImage">
      <img src={ImagemBackground} alt="" />
      <div className="boxText">
        <h2>{TextFront}</h2>
      </div>
    </div>
  );
};

export default CardImage;
