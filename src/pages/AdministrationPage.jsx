import React from "react";
import { Typography, Box, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import PageTitle from "../components/PageTitle";

export default function AdministrationPage() {
  return (
    <div>
      <Container sx={{ py: 2 }}>
        <PageTitle title="Administration" />
        {/* <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 35 }}
          viewport={{ once: true }}
        >
          <Typography variant="h4" color="primary" textAlign="center">
            Administration
          </Typography>
          <Typography variant="h5" color="teritiary" textAlign="center">
            Department of Electrical Engineering
          </Typography>
        </motion.div>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 35 }}
            viewport={{ once: true }}
          >
            <Box
              borderColor={"primary.main"}
              sx={{ borderTop: "7px solid", px: 5 }}
            >
              <hr />
            </Box>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 35 }}
            viewport={{ once: true }}
          >
            <Box sx={{ borderTop: "7px solid black", px: 4 }}>
              <hr />
            </Box>
          </motion.div>
        </Box>
        <br />
        <br /> */}

        <Grid
          container
          justifyContent="space-around"
          direction="row"
          alignItems="top"
          spacing={2}
        >
          <Grid item>
            <Typography>Head of Department</Typography>

            <Grid
              container
              justifyContent="Left"
              direction="row"
              alignItems="center"
              spacing={2}
            >
              <Grid item mt={5}>
                <Card sx={{ width: 150 }}>
                  <CardMedia
                    sx={{ height: 150 }}
                    image="/Images/vivek.JPG"
                    title="HOD"
                  />
                  <CardContent>
                    <Typography variant="h6 "gutterBottom component="div" fontSize={12}>
                      Dr. Vivek Kanhangad
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontSize={12}
                    >
                      Associate Professor
                      <br />
                      kvivek[at]iiti.ac.in
                      <br />
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid item>
              <Typography>Office Staff</Typography>

              <Grid
                container
                justifyContent="Left"
                direction="row"
                alignItems="center"
                spacing={2}
              >
                <Grid item mt={5}>
                  <Card sx={{ width: 150 }}>
                    <CardMedia
                      sx={{ height: 150 }}
                      image="/Images/sakshi.JPG"
                      title="Staff"
                    />
                    <CardContent>
                      <Typography  variant="h6"gutterBottom component="div" fontSize={12}>
                        Ms. Sakshi Jain
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        fontSize={12}
                      >
                        HoD Office staff
                        <br />
                        Junior Assistant
                        <br />
                        sakshij[at]iiti.ac.in
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <br />
      <br />
    </div>
  );
}
