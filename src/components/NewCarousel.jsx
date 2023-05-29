import React from "react";
import "./Components Css/Carousel.css";
import { Typography } from "@mui/material";
import cssTheme from '../cssTheme'

const NewCarousel = () => {
  // const newTheme = cssTheme();
  // const root = document.documentElement;
  // const myColor = getComputedStyle(root).getPropertyValue("--my-color");
  // root.style.setProperty("--my-color", newTheme);
  return (
    //   <Container>

    <div className="imgSlider">
      <div className="Carousel-text">
        <Typography varient='h3' fontSize={"3.5rem"} margin={"auto"} fontWeight={600}>
          Wel<span className="theme-color1">co</span>me t<span className="theme-color2">o</span> t<span className="theme-color3">h</span>e De<span className="theme-color4">par</span>tment o<span className="theme-color">f</span>
          <br />
          <span className="theme-color1">Ele</span>ctric<span className="theme-color2">al</span> Engi<span className="theme-color3">ne</span>ering
          {/* <br /> */}
          {/* <span className="theme-color">@</span>IIT <span className="theme-color">In</span>dore */}
        </Typography>
      </div>
    </div>



    //   </Container>
  );
};

export default NewCarousel;
