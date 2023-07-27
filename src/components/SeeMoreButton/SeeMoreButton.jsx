import "./style.css";
import RightArrow from "./RightArrow.svg"
const SeeMoreButton = () => {
  return (
    <>
      <button className="Button">
        <div>Veja mais produtos</div>
        <img src={RightArrow} alt="" className="Arrow"/>
      </button>
    </>
  );
};

export default SeeMoreButton;
