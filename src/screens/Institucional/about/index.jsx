import "./styles.css";
import Header from "../../../components/header";
import CarouselInstitucional from "../../../components/CarouselInstitucional";
import TextFormatted from "../../../components/TextFormatted";
import CardImage from "../../../components/CardImage";

import {
  about,
  missionImage,
  valueImage,
  productionImage,
} from "../../../assets/Institucional";

const data = [
  {
    url: missionImage,
    alt: "Um recipiente circular com diversos quadradinhos de chocolate à esquerda, flores brancas pequenas abaixo  e uma câmera fotográfica à direta com a inscrição instax lens 60mm",
    title: "Nossa missão",
  },
  {
    url: valueImage,
    alt: "Três frutos de cacau pendurados em seu pé, com um à frente em destaque em cor mais clara",
    title: "Nossos valores",
  },
  {
    url: productionImage,
    alt: "Um bombom de chocolate esférico com linhas de chocolate branco ao seu redor, quadradinhos quebrados de forma não uniforme à esquerda inferior e fragmentos de cacau seco alinhados no canto inferior direito",
    title: "Nossa produção",
  },
];

const text = `Nós nascemos do desejo de ser uma marca que carrega como princípio, além da renomada tradição produtiva dos chocolates artesanais de gramado, ser um negócio transparente de impacto ambiental e social.
Estamos há dez anos no mercado, sempre buscando expandir o nosso negócio, tanto para novos públicos quanto para novos locais.`;

function About() {
  return (
    <div className="mission-screen">
      <Header title="Conheça a Naturelle" linkback="/" />
      <CardImage
        ImagemBackground={about}
        TextFront={"Somos uma marca com história e propósito"}
        alt="Um pé de cacau com um fruto maduro em destaque em tons escuros com fundo desfocado"
      />
      <TextFormatted text={text} />
      <CarouselInstitucional data={data} />
      <div className="institucional-link">
        <p>
          Conheça mais sobre nós acessando o nosso{" "}
          <a href="/">site institucional</a>
        </p>
      </div>
    </div>
  );
}

export default About;
