import StarBorderIcon from "@mui/icons-material/StarBorder";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";

const StyledRating = styled(Rating)({
  emptyStar: {
    color: "#694948",
  },
  "& .MuiRating-iconFilled": {
    color: "#694948",
  },
});

const useStyles = makeStyles(() => ({
  emptyStar: {
    color: "#694948",
  },
}));

const CustomizedRating = ({ rating, precision }) => {
  const styled = useStyles();
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <StyledRating
        name="customized-color"
        value={rating}
        getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
        precision={precision || 0.5}
        readOnly
        emptyIcon={
          <StarBorderIcon fontSize="inherit" className={styled.emptyStar} />
        }
      />
    </Box>
  );
};

export default CustomizedRating;
