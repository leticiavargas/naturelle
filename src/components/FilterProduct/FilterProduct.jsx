import "./styles.css";
import { useState } from "react";

const FilterProduct = ({ onChange, value }) => {
  const [filters] = useState(["Mais vendido", "Menor preço", "Maior preço"]);

  return (
    <div className="SCCustomSelect">
      <select name="" id="SCFilterProduct" value={value} onChange={onChange}>
        <option value="sds">Selecione o filtro</option>
        {filters.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
      <button>Filtrar</button>
    </div>
  );
};

export default FilterProduct;
