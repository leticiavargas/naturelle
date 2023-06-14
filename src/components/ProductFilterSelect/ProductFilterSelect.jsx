import React from "react";
import "./styles.css";

const ProductFilterSelect = ({ onChange, valueProps }) => {
  const filters = ["Mais vendido", "Menor preço", "Maior preço"];

  return (
    <div className="SCCustomSelect">
      <select
        name=""
        id="SCFilterProduct"
        value={valueProps}
        onChange={onChange}
      >
        <option value={valueProps || ""}>Selecione um filtro</option>
        {filters.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
      <label>Filtrar</label>
    </div>
  );
};

export default ProductFilterSelect;
