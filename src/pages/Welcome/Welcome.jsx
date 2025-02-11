import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { fontSize, styled } from "@mui/system";
import CustomButton from "../../components/CustomButton";
import WelcomeImage from "../../assets/welcome.png";

const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "64px",
  color: "#fff",
  fontWeight: "bold",
  margin: theme.spacing(4, 0, 4, 0),
  [theme.breakpoints.down("sm")]: {
    fontSize: "40px",
  },
}));

const Img = styled("img")({
  maxWidth: "100%",
  marginBottom: "2rem",
});

function Welcome() {
  return (
    <Box sx={{ backgroundColor: "#FED801", minHeight: "80vh" }}>
      <Container>
        <CustomBox>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#687690",
                fontWeight: "500",
                mt: 10,
                mb: 4,
              }}
            >
              Welcome to Techflix Restaurant
            </Typography>
            <Title variant="h2">
              Discover a place where you'll love to eat
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
            >
              Immerse yourself in the elegant ambiance as you savor each bite,
              accompanied by our extensive selection of hand-picked wines and
              careful curation.
            </Typography>
            <CustomButton
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="More About Us"
              welcomeBtn={true}
            />
          </Box>
          <Box sx={{ flex: 1.25 }}>
            <Img src={WelcomeImage} alt="welcome" />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
}

export default Welcome;
