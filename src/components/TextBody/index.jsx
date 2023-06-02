import "./styles.css";

const TextBody = ({ text }) => {
  const paragraphs = text.split("\n\n");

  return (
    <div className="textbody">
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

/*  Forma de uso do componente: 
     Criar uma const text = `TEXTO COM ESPAÇOS E PARÁGRAFOS`;
     e chamar na view o componente <TextBody text={text} /> */

export default TextBody;
