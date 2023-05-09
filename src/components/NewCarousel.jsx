import React from "react";
import "./Components Css/Carousel.css";
import { Typography } from "@mui/material";

const NewCarousel = () => {
  return (
    //   <Container>
    <div className="imgSlider">
      <div className="Carousel-text">
        <Typography fontSize={"2rem"} margin={"auto"} fontWeight={600}>
          Welcome to the Department of
          <br />
          Electrical Engineering
          <br />
          @ IIT Indore
          <br />
        </Typography>
      </div>
    </div>

    //   </Container>
  );
};

export default NewCarousel;
