import React from "react";
import { Box, styled, Typography } from "@mui/material";
import likeIcon from "../../src/assets/like.png";
import shareIcon from "../../src/assets/share.png";
import heartIcon from "../../src/assets/heart.png";

// Move styled components outside the function
const DishBox = styled(Box)(({ theme }) => ({
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  maxWidth: 350,
  backgroundColor: "#fff",
  margin: theme.spacing(0, 2, 0, 2),
  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(4),
  },
  "&:hover": {
    backgroundColor: "#f5f5f5",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
    transform: "scale(1.05)",
    transition: "all 0.3s ease-in-out",
  },
}));

const InfoBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const ImgContainer = styled(Box)({
  width: "100%",
});

function CustomCard({ img, price, item, likes, heart, share }) {
  return (
    <DishBox>
      <ImgContainer>
        <img src={img} alt="dish" style={{ maxWidth: "100%" }} />
      </ImgContainer>
      <Box sx={{ padding: "1rem" }}>
        <Typography variant="body2" sx={{ fontWeight: "700" }}>
          ${price}
        </Typography>
        <Typography variant="body2" sx={{ my: 2 }}>
          {item}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <InfoBox>
            <img src={likeIcon} alt="like icon" />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {likes}
            </Typography>
          </InfoBox>
          <InfoBox>
            <img src={heartIcon} alt="heart icon" />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {heart}
            </Typography>
          </InfoBox>
          <InfoBox>
            <img src={shareIcon} alt="share icon" />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {share}
            </Typography>
          </InfoBox>
        </Box>
      </Box>
    </DishBox>
  );
}

export default CustomCard;
