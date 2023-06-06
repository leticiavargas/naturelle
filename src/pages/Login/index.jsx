import "./styles.css";
import { useState } from "react";
import marcaNaturelle from "../../assets/MarcaNaturelle.svg";
import Input from "../../components/Input";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const inputOnChangeHandler = (event, key) => {
    setForm((previusValue) => {
      return { ...previusValue, [key]: event.target.value };
    });
  };
  return (
    <div className="coitainerLogin">
      <img src={marcaNaturelle} alt="" />
      <Input
        label={"E-mail"}
        placeholder={"Digite seu e-mail"}
        detail={"ex: meu.email@gmail.com"}
        name={"email"}
        value={form.email}
        onChange={(event) => inputOnChangeHandler(event, "email")}
      />
      <Input
        type="password"
        label={"Senha"}
        placeholder={"Digite sua senha"}
        name={"senha"}
        value={form.password}
        onChange={(event) => inputOnChangeHandler(event, "password")}
      />
      <button onClick={() => console.log(form)}>Qualquer coisa</button>
    </div>
  );
};

export default Login;
