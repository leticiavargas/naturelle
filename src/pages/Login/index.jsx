import "./styles.css";
import { useState } from "react";
import marcaNaturelle from "../../assets/marcaNaturelle.svg";
import Input from "../../components/Input";
import Button from "../../components/Button";
import HyperLink from "../../components/HyperLink";
import IconButton from "../../components/IconButton";

import iconGoogle from "../../assets/iconGoogle.svg";
import iconFacebook from "../../assets/iconFacebook.svg";
import iconApple from "../../assets/iconApple.svg";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const inputOnChangeHandler = (event, key) => {
    setForm((previusValue) => {
      return { ...previusValue, [key]: event.target.value };
    });
  };
  return (
    <div className="containerLogin">
      <img
        className="logoNaturelle"
        src={marcaNaturelle}
        alt="Logo Naturelle"
      />
      <form className="formLogin">
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
        <div className="buttonsFormLogin">
          <Button value="Entrar" theme="dark" />
          <Button value="Entrar sem login" />
        </div>
      </form>
      <div className="hyperlinksContainer">
        <HyperLink text="Ainda não tem conta? Cadastre-se" />
        <HyperLink text="Esqueceu sua senha?" />
      </div>
      <div className="lineSeparator"></div>
      <p>Entre com sua conta</p>
      <div className="containerIcons">
        <IconButton icon={iconGoogle} alt={"Botão para logar com o Google"} />
        <IconButton
          icon={iconFacebook}
          alt={"Botão para logar com o Facebook"}
        />
        <IconButton icon={iconApple} alt={"Botão para logar com a Apple"} />
      </div>
    </div>
  );
};

export default Login;
