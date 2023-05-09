import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function AboutUs() {
  return (
    <>
      <Box sx={{ py: 5 }}>
        <Typography
          variant="h4"
          fontWeight="600"
          
        >
          About Us
        </Typography>

        <Box sx={{ py: 3 }}>
          <Typography variant="p">
            One of the founding departments of the Institute from 2009, the
            Department of Electrical Engineering at IIT Indore has played a
            prominent role by setting the highest standards in teaching and
            research. Over the years, several new interdisciplinary courses and
            programs in the fields of Communications and Signal Processing
            (CSP), VLSI Design and Nanotechnology (VDN), have been offered. The
            department aims to focus on imparting fundamental domain knowledge
            through its core curriculum, responding to the changing developments
            via offering a vibrant set of electives, and contributing to
            technology development. We aim to continuously be broadening our
            scope, building up on the current strengths, engage effectively with
            the industry for technology transfer, and endeavour to set high
            academic standards for the society.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
