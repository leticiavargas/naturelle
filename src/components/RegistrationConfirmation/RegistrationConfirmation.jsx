import "./styles.css";
import checkIcon from "../../assets/images/circle-check.svg";
import { useState, useEffect } from "react";
const RegistrationConfirmation = () => {
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
    <body className="container">
      <img src={checkIcon} alt="check-icon" />
      <text className="registrationConfirmation">
        <h1>Boas-vindas, {user}!</h1>
        <p>Seus dados foram salvos com sucesso!</p>
      </text>
    </body>
  );
};

export default RegistrationConfirmation;
