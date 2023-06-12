import "./styles.css";
import Header from "../../../components/Header";
import CarouselInstitucional from "../../../components/CarouselInstitucional";
import TextFormatted from "../../../components/TextFormatted";
import CardImage from "../../../components/CardImage";

const data = [
  {
    url: "/Rectangle129.png",
    alt: "texto alternativo",
    title: "Nossa missão",
  },
  {
    url: "/Rectangle130.png",
    alt: "texto alternativo2",
    title: "Nossos valores",
  },
  {
    url: "/Rectangle131.png",
    alt: "texto alternativo3",
    title: "Nossa produção",
  },
];

const text = `Nós nascemos do desejo de ser uma marca que carrega como princípio, além da renomada tradição produtiva dos chocolates artesanais de gramado, ser um negócio transparente de impacto ambiental e social.
Estamos há dez anos no mercado, sempre buscando expandir o nosso negócio, tanto para novos públicos quanto para novos locais.`;

function Mission() {
  return (
    <div className="mission-screen">
      <Header title="Nossa missão" linkback="/" />
      <CardImage
        ImagemBackground={"/mission.png"}
        TextFront={"Somos uma marca com história e propósito"}
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

export default Mission;
