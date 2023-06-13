import "./ProductCardImage.css";
const ProductCardImage = ({
  productAltText,
  productImage,
  tags,
  isShareable,
  containerClass,
  imageClass,
  shareClass,
  labelContainerClass,
  labelClass,
}) => {
  return (
    <div className={`ProductCardImageContainer ${containerClass}`}>
      <img
        src={productImage}
        alt={productAltText}
        className={`ProductCardImage ${imageClass}`}
      />
      {isShareable && (
        <button className={`ProductCardImageShareIcon ${shareClass}`}>
          {/* TO-DO: lógica de compartilhamento ao clicar no botão compartilhar*/}
          <img
            src="/ProductCardImage/Compartilhar.svg"
            alt="Ícone de compartilhar"
          />
        </button>
      )}
      <div className={`ProductCardImageLabels ${labelContainerClass}`}>
        {tags?.includes("lactoseFree") && (
          <img
            src="/ProductCardImage/etiqueta-zero-lactose.svg"
            alt="Produto sem lactose"
            className={`ProductCardImageLabel ${labelClass}`}
          />
        )}
        {tags?.includes("glutenFree") && (
          <img
            src="/ProductCardImage/etiqueta-zero-gluten.svg"
            alt="Produto sem gluten"
            className={`ProductCardImageLabel ${labelClass}`}
          />
        )}
        {tags?.includes("sugarFree") && (
          <img
            src="/ProductCardImage/etiqueta-zero-acucar.svg"
            alt="Produto sem açúcar"
            className={`ProductCardImageLabel ${labelClass}`}
          />
        )}
      </div>
    </div>
  );
};

ProductCardImage.defaultProps = {
  isShareable: false,
  tags: false,
  containerClass: "",
  imageClass: "",
  shareClass: "",
  labelContainerClass: "",
  labelClass: "",
};

export default ProductCardImage;
