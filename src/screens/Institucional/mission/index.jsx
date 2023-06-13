import "./styles.css";

import camera from "../../../assets/Institucional/Rectangle129.png";
import Header from "../../../components/header";
import CardImage from "../../../components/CardImage";
import TextFormatted from "../../../components/TextFormatted";

const text = `Nós somos uma marca que se preocupa com o impacto das nossas produções e o como os nossos chocolates podem fazer a diferença na vida dos nossos clientes.
Por isso, nossa paixão é trazer o bem-estar e saúde para todos, independente das restrições, e fazer a diferença através da produção bean-to-bar.`;

function Mission() {
  return (
    <div className="ourMission-screen">
      <Header title="Nossa missão" linkback="/" />
      <CardImage
        ImagemBackground={camera}
        TextFront={"Viemos entregar bem-estar e bom impacto"}
        alt="Chocolate em pedaços com uma câmera e flores"
      />
      <TextFormatted text={text} />
    </div>
  );
}

export default Mission;
