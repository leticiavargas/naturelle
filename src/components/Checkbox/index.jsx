import "./styles.css";

const Checkbox = ({ label, onChange }) => {
  return (
    <div className="checkboxContainer">
      <input type="checkbox" id="checkbox-1" onChange={onChange} />
      <label htmlFor="checkbox-1">{label}</label>
    </div>
  );
};

export default Checkbox;
