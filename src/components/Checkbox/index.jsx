import "./styles.css";

const Checkbox = ({ label, id = "checkbox-1", onChange }) => {
  return (
    <div className="checkboxContainer">
      <input type="checkbox" id={id} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;
