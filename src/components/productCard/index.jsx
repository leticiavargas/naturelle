import CustomizedRating from "../starRating";
import "./styles.css";

const Card = ({ img, name, weigth, rating, rate, price }) => {
  const redirectToItem = () => {
    //  TODO implementar redirecionamento para o item quando o backnd estiver pronto
  };

  return (
    <div className="cardContainer" onClick={redirectToItem}>
      <div className="cardImageContainer">
        <img alt="product" src={img}></img>
      </div>
      <div className="cardContentContainer">
        <p className="cardDescription">
          {name} | {weigth}
        </p>
        <p className="cardRating">
          <CustomizedRating rating={rate} precision={0.1}></CustomizedRating>{" "}
          {rating} avaliações
        </p>
        <p className="cardPrice">R$ {price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Card;
