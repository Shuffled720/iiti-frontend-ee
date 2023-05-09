import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";
import Cards from "../components/ResearchBody/Cards";

export default function ResearchPage() {
  return (
    <div>
      <Container sx={{ py: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 35 }}
          viewport={{ once: true }}
        >
          <Typography variant="h4" color="primary" textAlign="center">
            Research Areas
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
            <Box sx={{ borderTop: "7px solid #105297", px: 5 }}>
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

        <Grid
          container
          justifyContent="center"
          direction="row"
          alignItems="top"
          spacing={4}
          margin="auto"
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center", height: "10%" }}
          >
            <Cards
              specialisation={"Communications and Signal Processing"}
              action={"/signals"}
              photo={"Images/logo/signal.jpg"}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Cards
              specialisation={"VLSI Design and Nano Electronics"}
              action={"/vlsi"}
              photo={"Images/logo/VLSI.jpg"}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Cards
              specialisation={"Power Electronics and Power Systems"}
              photo={"Images/logo/power.png"}
              action={"/power"}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Cards
              specialisation={"RF and Microwave"}
              photo={"Images/logo/RFMF.jpg"}
              action={"/RF-MW"}
            />
          </Grid>
        </Grid>
        <br />
        <br />
      </Container>
    </div>
  );
}
