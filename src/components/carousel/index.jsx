import { useSwipeable } from "react-swipeable";
import imagem from "../../assets/dif.svg";
import React, { useState } from "react";
import "./styles.css";

const Carousel = ({ images }) => {
  images = [imagem, imagem, imagem];
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
    const nextIndex = (currentIndex + 1) % images.length;
    if (nextIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(nextIndex);
    }
    setOffsetX(0);
  };

  const showPrevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    if (prevIndex === images.length - 1) {
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
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${index}`}
            className={`carouselImage ${
              index === currentIndex ? "active" : ""
            }`}
          />
        ))}
      </div>
      <div className="indicators">
        {images.map((_, index) => (
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
