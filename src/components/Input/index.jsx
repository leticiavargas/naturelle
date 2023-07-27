import "./styles.css";

const Input = ({
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
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
      {detail && <p>{detail}</p>}
    </div>
  );
};

export default Input;
