import { Typography, Box, Grid } from "@mui/material";
import React from "react";
// import { Grid } from "@mui/material";

const MsgfromHOD = () => {
  return (
    <>
      <Typography variant="h4" fontWeight="600">
        Message from HOD
      </Typography>
      <br />
      <Grid
        container
        justifyContent="space-between"
        direction="row"
        alignItems="center"
        
      >
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="p">
              As the Head of the Electrical Department, I welcome you to our
              website, where you can find information about our research,
              academic programs, and events. At IIT Indore, we are committed to
              providing our students with an exceptional education that prepares
              them for successful careers in electrical engineering. We offer undergraduate and graduate
              programs in electrical engineering that are designed to give our
              students a strong foundation in the fundamentals of the field
              while also exposing them to the latest research and technologies.
              Our students have opportunities to work on research projects,
              participate in internships, and engage with industry leaders
              through our industry partnerships. I invite you to explore our
              website to learn more about our department and our academic
              programs. If you have any questions or would like to learn more
              about what we have to offer, please do not hesitate to contact us.
              Thank you for your interest in the Electrical Department at IIT
              Indore.
            </Typography>
            <Typography textAlign="right">~ Vivek Kanhangad</Typography>
          </Box>
          <br />
        </Grid>
        <Grid item xs={12} md={5}>
          <Box>
            <img src="Images/gallery/IMG_6913.JPG" alt="Hod" />
          </Box>
          <br />
        </Grid>
      </Grid>
    </>
  );
};

export default MsgfromHOD;
