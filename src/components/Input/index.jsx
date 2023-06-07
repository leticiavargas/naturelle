import "./styles.css";

const Index = ({
  type = "text",
  name,
  label,
  placeholder,
  value,
  onChange,
  detail,
}) => {
  return (
    <div className="cointainerInput">
      <label>
        <span>{label}</span>
        <input
          type={type}
          id={name}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
        />
      </label>

      {detail && <p>{detail}</p>}
    </div>
  );
};

export default Index;
