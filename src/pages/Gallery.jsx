import React from "react";
import { ReactPhotoCollage } from "react-photo-collage";
import { Typography, Box, Container } from "@mui/material";
import { motion } from "framer-motion";
import LazyLoad from "react-lazyload";

import PageTitle from "../components/PageTitle";

class Gallery extends React.Component {
  state = {
    innerWidth: window.innerWidth,
  };

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({ innerWidth: window.innerWidth });
  }
  getWidth(innerWidth) {
    if (innerWidth <= 700) return [1, 2, 2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 1];
    return [1, 3, 2, 3, 2, 3, 2, 2, 2];
  }
  render() {
    const setting = {
      width: this.state.innerWidth - 100,
      height: ["450px", "350px"],

      layout: this.getWidth(this.state.innerWidth),
      photos: [
        {
          source: "Images/gallery/IMG_6913.JPG",
        },
        {
          source: "Images/gallery/IMG_6925.JPG",
        },
        {
          source: "Images/gallery/IMG_6920.JPG",
        },
        {
          source: "Images/gallery/IMG_6928.JPG",
        },
        {
          source: "Images/gallery/IMG_6805.JPG",
        },
        {
          source: "Images/gallery/9K6A6820.JPG",
        },
        {
          source: "Images/gallery/9K6A6859.JPG",
        },
        {
          source: "Images/gallery/9K6A6855.JPG",
        },
        {
          source: "Images/gallery/IMG_6892.JPG",
        },
        {
          source: "Images/gallery/9K6A6827.JPG",
        },
        {
          source: "Images/gallery/9K6A6843.JPG",
        },
        {
          source: "Images/gallery/9K6A6862.JPG",
        },
        {
          source: "Images/gallery/9K6A6826.JPG",
        },
        {
          source: "Images/gallery/9K6A6838.JPG",
        },
        {
          source: "Images/gallery/9K6A6853.JPG",
        },
        {
          source: "Images/gallery/9K6A6861.JPG",
        },
        {
          source: "Images/gallery/1.JPG",
        },
        {
          source: "Images/gallery/13.JPG",
        },
        {
          source: "Images/gallery/2.JPG",
        },
        {
          source: "Images/gallery/btech25.JPG",
        },
      ],
      showNumOfRemainingPhotos: true,
    };

    return (
      <>
        <Container sx={{ py: 2 }}>
        <PageTitle title="Gallery" />
          <LazyLoad height={200}>
            <ReactPhotoCollage {...setting} />
          </LazyLoad>
        </Container>
      </>
    );
  }
}

export default Gallery;
