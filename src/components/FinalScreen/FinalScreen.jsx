import "./styles.css";
import checkIcon from "../../assets/images/circle-check.svg";
import { useState, useEffect } from "react";
const FinalScreen = ({ title, description }) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser("Júlia");

    // Aqui irá o retorno da rota criada
    // getUserById()
    //   .then((result) => {
    //     setUser(result);
    //   })
    //   .catch((error) => {
    //     alert(error);
    //   });
  }, []);
  return (
    <div className="containerFinalScreen">
      <img id="checkIcon" src={checkIcon} alt="check-icon" />
      <div className="confirmation">
        <h1>
          {title} {user}!
        </h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FinalScreen;
