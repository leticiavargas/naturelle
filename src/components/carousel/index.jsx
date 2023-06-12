import ProductCardImage from "../ProductCardImage/ProductCardImage";
import { useSwipeable } from "react-swipeable";
import React, { useState } from "react";
import "./styles.css";

const Carousel = ({ product }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [startX, setStartX] = useState(0);

  const handleSwiping = (event) => {
    const { deltaX, absX } = event;
    const threshold = 50;

    if (absX > threshold) {
      setStartX(deltaX);
      setOffsetX(deltaX);
    } else {
      setOffsetX(deltaX - startX);
    }
  };
  const handlers = useSwipeable({
    onSwipedLeft: () => showNextImage(),
    onSwipedRight: () => showPrevImage(),
    onSwiping: handleSwiping,
  });

  const showNextImage = () => {
    const nextIndex = (currentIndex + 1) % product.image.length;
    if (nextIndex === 0) {
      setCurrentIndex(product.image.length - 1);
    } else {
      setCurrentIndex(nextIndex);
    }
    setOffsetX(0);
  };

  const showPrevImage = () => {
    const prevIndex =
      (currentIndex - 1 + product.image.length) % product.image.length;
    if (prevIndex === product.image.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(prevIndex);
    }
    setOffsetX(0);
  };

  return (
    <div className="carouselContainer" alt="Carrossel com imagens do produto">
      <div
        className="carousel"
        {...handlers}
        style={{
          transform: `translateX(calc(-${currentIndex}00% + ${offsetX}px))`,
        }}
      >
        {product.image.map((product, i) => (
          <div
            className={`carouselImage ${i === currentIndex ? "active" : ""}`}
          >
            <ProductCardImage key={i} productImage={product}></ProductCardImage>
          </div>
        ))}
      </div>
      <div className="indicators">
        {product.image.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
