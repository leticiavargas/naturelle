import "./styles.css";
import arrowIcon from "./chevron_right.svg";

// Temas padrão: light && dark
// Para usar o icone padrão: ativar useArrowIcon = true
// Para usar um icone da react-icons, passar o icone na propriedade Icon
const Button = ({
  type = "text",
  value,
  className,
  theme = "light",
  useArrowIcon = false,
  Icon,
  onClick,
}) => {
  const buttonClassName = className
    ? `button_class ${theme} ${className}`
    : `button_class ${theme}`;

  return (
    <button className={buttonClassName} type={type} onClick={onClick}>
      {value}
      {useArrowIcon ? (
        <img src={arrowIcon} alt="arrow icone" />
      ) : Icon ? (
        <Icon />
      ) : (
        ""
      )}
    </button>
  );
};

export default Button;
