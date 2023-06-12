import Rating from "@mui/material/Rating";

const CustomizedRating = ({ rating, precision }) => {
  const styledStar = {
    color: "success.main",
    "& .css-1c99szj-MuiRating-icon": {
      color: "#694948",
    },
    "& .MuiRating-iconFilled": {
      color: "#694948",
    },
  };
  return (
    <Rating
      name="Avaliação do produto"
      value={rating}
      getLabelText={(value) => `${value} ${value > 1 ? "Estrelas" : "Estrela"}`}
      precision={precision || 0.5}
      readOnly
      sx={styledStar}
    />
  );
};

export default CustomizedRating;
