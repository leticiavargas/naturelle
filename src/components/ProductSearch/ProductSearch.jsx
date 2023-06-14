import React, { useState } from "react";
import "./styles.css";

const ProductSearch = ({ placeholder, imageLeft, imageRight }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // lógica para realizar a pesquisa baseado no searchTerm
    console.log("Realizando a pesquisa:", searchTerm);
  };

  // Implementação Pesquisa por voz Chrome
  const handleVoiceSearch = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "pt-BR";

    recognition.onresult = (event) => {
      const result = event.results[0][0].transcript;
      setSearchTerm(result);
    };

    recognition.start();
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <div className="ProductSearchContainer">
        <img src={imageLeft} alt="Imagem de lupa para pesquisa" />
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="button" onClick={handleVoiceSearch}>
          <img src={imageRight} alt="Botão para pesquisar por voz" />
        </button>
      </div>
    </form>
  );
};

export default ProductSearch;
