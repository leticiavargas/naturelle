import "./styles.css";
import Header from "../../../components/Header";

import TextFormatted from "../../../components/TextFormatted";
import CardImage from "../../../components/CardImage";

import { values } from "../../../assets/Institucional";

const text = `Temos como compromisso a produção de chocolates artesanais de qualidade, consideramos a origem dos nossos ingredientes, a sustentabilidade, a inclusão de pessoas com restrições alimentares e prezamos pela transparência em todas as etapas do processo.
Nosso principal valor está na busca por ser uma marca responsável e que busca sempre entregar a melhor experiência possível para os nossos clientes.`;

function Values() {
  return (
    <div className="mission-screen">
      <Header title="Nossos valores" linkback="/" />
      <CardImage
        ImagemBackground={values}
        TextFront={"Buscamos o cuidado a cada detalhe"}
        alt="Três frutos de cacau pendurados em seu pé, com um à frente em destaque em cor mais clara"
      />
      <TextFormatted text={text} />
    </div>
  );
}

export default Values;
