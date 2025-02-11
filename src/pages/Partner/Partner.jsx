import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { styled, textAlign } from "@mui/system";
import logoImg from "../../assets/logo.png";
import starsImg from "../../assets/Star.png";
import logosImg from "../../assets/logos.png";

function Partner() {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "coloumn",
      alignItems: "center",
      textAlign: "center",
      marginBottom: theme.spacing(4),
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(4),
    },
  }));
  return (
    <Box sx={{ mt: 10 }}>
      <CustomContainer>
        <CustomBox>
          <img src={logoImg} alt="logo" style={{ maxWidth: "100%" }} />
          <Typography
            variant="body2"
            sx={{
              color: "#7D8589",
              fontSize: "16px",
              fontWeight: "bold",
              mt: 2,
            }}
          >
           More than 45,000 trust Techflix
          </Typography>
        </CustomBox>
        <Box>
          <img src={starsImg} alt="stars" style={{ maxWidth: '100%' }} />
          <Typography
          sx={{ 
            color: "#7D8589",
            fontSize: "16px",
            fontWeight: "bold",
            mt: 2,
           }}
          >
            5-star Rating(2k+ Reviews)
          </Typography>
        </Box>
      </CustomContainer>
      <Container sx={{ display: "flex", flexDirection: "coloumn" }}>
        <img src={logosImg} />
      </Container>
    </Box>
  );
}

export default Partner;
