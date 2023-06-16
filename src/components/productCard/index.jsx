import ProductCardImage from "../ProductCardImage/ProductCardImage";
import CustomizedRating from "../starRating";
import "./styles.css";

const Card = ({ name, weigth, rating, rate, price, product }) => {
  return (
    <div className="cardContainer">
      <div className="cardImageContainer">
        <ProductCardImage productImage={product}></ProductCardImage>
      </div>
      <div className="cardContentContainer">
        <h2 className="cardDescription">
          {name} | {weigth}
        </h2>
        <p className="cardRating">
          <CustomizedRating rating={rate} precision={0.1}></CustomizedRating>
          {rating} avaliações
        </p>
        <p className="cardPrice">
          R$ {price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
        </p>
      </div>
    </div>
  );
};

export default Card;
