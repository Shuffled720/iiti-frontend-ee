import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
// import Theme from "../../Theme";
import { Grid } from "@mui/material";
import cssTheme from "../../cssTheme";

export default function AboutUs() {
  return (
    <>
      <Box sx={{ py: 5, }} className="about-bg">
        <Container >
          {/* 
          <Box sx={{ py: 3, display: 'flex', justifyContent: 'base-line' }}>
            <Box sx={{ width: '500%', height: "50%", display: { xs: 'none', md: 'flex' }, mx: 5 }} >
              <img src="/Contact-us.svg" width="100%" alt="" />
            </Box>


            <Typography variant="p" color="#fff" textAlign='justify'>
              <Typography variant="h4" fontWeight="600" textAlign='center'  >
                About Us
              </Typography>
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

            <Box >


            </Box>

          </Box> */}



          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems='top'
          >
            <Grid item md={5} >
              <Grid
                container
                direction="row"
                sx={{ height: '20px' }}

              >
                <Grid sx={{ display: { xs: 'none', md: 'flex' } }} >
                  <img src="/Contact-us.svg" width="100%" alt="" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6}>
              <Grid
                container
                direction="row"
                sx={{ height: '20px' }}

              >
                <Grid item >
                  <Typography variant="p" color="#fff" textAlign='justify'>
                    <Typography variant="h4" fontWeight="600" textAlign='center'  >
                      About Us
                    </Typography>
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
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>

      </Box>

    </>
  );
}
