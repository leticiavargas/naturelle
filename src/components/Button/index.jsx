import "./styles.css";
import arrowIcon from "./chevron_right.svg";

// Temas padrão: light && dark
// Para usar o icone padrão: ativar useArrowIcon = true
// Para usar um icone da react-icons, passar o icone na propriedade Icon
const Button = ({
  type = "button", // submit || reset
  value,
  className,
  theme = "light",
  useArrowIcon = false,
  iconImageUrl,
  altIconImage = "icon image",
  iconClassName,
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
        <img
          className={`image_size ${iconClassName}`}
          src={arrowIcon}
          alt="arrow icone"
        />
      ) : iconImageUrl ? (
        <img
          className={`image_size ${iconClassName}`}
          src={iconImageUrl}
          alt={altIconImage}
        />
      ) : (
        Icon && <Icon />
      )}
    </button>
  );
};

export default Button;
