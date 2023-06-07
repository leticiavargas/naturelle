import React, { useState } from "react";
import "./styles.css";

const ProductFilterSelect = ({ onChange, value }) => {
  const [filters] = useState(["Mais vendido", "Menor preço", "Maior preço"]);

  const handleFilter = () => {
    // Lógica para aplicar o filtro
  };

  return (
    <div className="SCCustomSelect">
      <select name="" id="SCFilterProduct" value={value} onChange={onChange}>
        <option value={value || ""}>Selecione um filtro</option>
        {filters.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
      <button onClick={handleFilter}>Filtrar</button>
    </div>
  );
};

export default ProductFilterSelect;
