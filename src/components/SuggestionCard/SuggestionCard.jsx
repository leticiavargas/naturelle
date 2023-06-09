import "./SuggestionCard.css";
import ProductImageCard from "../ProductCardImage/ProductCardImage";
import { FiShoppingCart } from "react-icons/fi";

const SuggestionCard = ({
  className,
  productName,
  productImage,
  productContent,
  productPrice,
  installments,
}) => {
  const BRReal = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <>
      <div className={`SuggestionCard ${className}`}>
        <ProductImageCard
          className="ImageCard"
          productAltText={productName}
          productImage={productImage}
          productPrice={productPrice}
          hasSugar={productContent.sugar}
          hasGluten={productContent.gluten}
          hasMilk={productContent.milk}
        />
        <div className="DescriptionContainer">
          <h1>{productName}</h1>
          <h2>{BRReal.format(productPrice)}</h2>
          <p>{`Em até ${installments}x sem juros`}</p>
        </div>
          <button
            className="ShoppingCartButton"
            onClink={() => {
              //Inserir função que adiciona produto ao carrinho
              // ou abre modal para adicionar um produto com quantidade
              console.log("Botão pressionado");
            }}
          >
            <FiShoppingCart className="Icon" />
          </button>
      </div>
    </>
  );
};

export default SuggestionCard;
