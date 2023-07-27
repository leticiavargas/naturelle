import "./styles.css";
import arrowIcon from "./chevron_right.svg";

// Temas padrão: light && dark

// =====================Uso de Icone=====================
// Para usar o icone padrão: ativar useArrowIcon = true
// Para passar uma imagem como icone usar iconImage e altIconImage
// Para usar um icone da react-icons, passar o icone na propriedade Icon
// Apenas uma das 3 opções acima pode ser usada
// ===============================================

// className para caso queira aplicar algum css ao botão
// iconClassName para caso queira aplicar algum css as imagens
const Button = ({
  type = "button", // submit || reset
  value,
  className,
  theme = "light",
  useArrowIcon = false,
  iconImage,
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
      ) : iconImage ? (
        <img
          className={`image_size ${iconClassName}`}
          src={iconImage}
          alt={altIconImage}
        />
      ) : (
        Icon && <Icon />
      )}
    </button>
  );
};

export default Button;
