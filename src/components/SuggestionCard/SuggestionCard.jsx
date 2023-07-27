import "./SuggestionCard.css";
import ProductImageCard from "../ProductCardImage/ProductCardImage";
import { FiShoppingCart } from "react-icons/fi";

const SuggestionCard = ({ className, product, installments, onClick }) => {
  const capitalize = (string) =>
    string.split("").reduce((acc, element, index, array) => {
      acc +=
        !index ||
        (string.charAt(index - 1) === " " && string.charAt(index + 2) !== " ")
          ? element.toUpperCase()
          : element;

      return acc;
    }, "");

  const BRReal = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const name = capitalize(product.name);
  const { tags, price } = product;
  const [image] = product.images;

  return (
    <div className={`SuggestionCard ${className}`}>
      <ProductImageCard
        className="ImageCard"
        productAltText={name}
        productImage={image}
        productPrice={price}
        hasSugar={!tags.includes("sugarFree")}
        hasGluten={!tags.includes("glutenFree")}
        hasMilk={tags.includes("milkFree")}
      />
      <div className="DescriptionContainer">
        <h1>{name}</h1>
        <h2>{BRReal.format(price)}</h2>
        <p>{`Em até ${installments}x sem juros`}</p>
      </div>
      <button className="ShoppingCartButton" onClick={onClick}>
        <FiShoppingCart className="Icon" />
      </button>
    </div>
  );
};

export default SuggestionCard;
