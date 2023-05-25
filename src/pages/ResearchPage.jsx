import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";
import ResearchCard from "./ResearchCard";
import PageTitle from "../components/PageTitle"

export default function ResearchPage() {
  return (
    <div>
      <Container sx={{ py: 2 }}>
        <PageTitle title="Research Areas"/>
        {/* <motion.div
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
        </Box> */}

        <Grid
          container
          justifyContent="space-around"
          direction="row"
          alignItems="top"
          spacing={5}
        >
          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: "flex", justifyContent: "center", height: "10%" }}
          >
            <ResearchCard
              specialisation={"Communications and Signal Processing"}
              description={
                "Communication and signal processing are two interrelated fields that deal with the transmission, reception, and analysis of information through various mediums."
              }
              action={"/research/signal"}
              photo={"/Images/logo/signal.jpg"}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {/* <Cards
              specialisation={"VLSI Design and Nano Electronics"}
              action={"/vlsi"}
              photo={"Images/logo/VLSI.jpg"}
            /> */}
            <ResearchCard
              specialisation={"VLSI Design and Nano Electronics"}
              description={
                "VLSI Design and Nano Electronics focus on the design and manufacture of microelectronic circuits and devices."
              }
              action={"/research/vlsi"}
              photo={"/Images/logo/VLSI.jpg"}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {/* <Cards
              specialisation={"Power Electronics and Power Systems"}
              photo={"Images/logo/power.png"}
              action={"/power"}

            /> */}
            <ResearchCard
              specialisation={"Power Electronics and Power Systems"}
              description={
                "Power Electronics and Power Systems deal with the generation, transmission, distribution, and use of electrical energy."
              }
              photo={"/Images/logo/power.png"}
              action={"/research/power"}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {/* <Cards
              specialisation={"RF and Microwave"}
              photo={"Images/logo/RFMF.jpg"}
              action={"/RF-MW"}
            /> */}
            <ResearchCard
              specialisation={"RF and Microwave"}
              description={
                "RF (Radio Frequency) and microwave engineering are two fields of electrical engineering that focus on the design and analysis of high-frequency electronic circuits and systems."
              }
              photo={"Images/logo/RF.jpg"}
              action={"research//RF"}
            />
          </Grid>
        </Grid>
        <br />
        <br />
      </Container>
    </div>
  );
}
