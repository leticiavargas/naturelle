import "./ProductCardImage.css";
const ProductCardImage = ({
  productAltText,
  productImage,
  isShareable = true,
  hasSugar = true,
  hasGluten = true,
  hasMilk = true,
  containerClass,
  imageClass,
  shareClass,
  labelContainerClass,
  labelClass
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
          <img
            src="/ProductCardImage/Compartilhar.svg"
            alt="Ícone de compartilhar"
          />
        </button>
      )}
      <div className={`ProductCardImageLabels ${labelContainerClass}`}>
        {hasMilk && (
          <img
            src="/ProductCardImage/etiqueta-zero-lactose.svg"
            alt="Produto zero açucar"
            className={`ProductCardImageLabel ${labelClass}`}
          />
        )}
        {hasGluten && (
          <img
            src="/ProductCardImage/etiqueta-zero-gluten.svg"
            alt="Produto zero gluten"
            className={`ProductCardImageLabel ${labelClass}`}
          />
        )}
        {hasSugar && (
          <img
            src="/ProductCardImage/etiqueta-zero-acucar.svg"
            alt="Produto zero lactose"
            className={`ProductCardImageLabel ${labelClass}`}
          />
        )}
      </div>
    </div>
  );
};

export default ProductCardImage;
